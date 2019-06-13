import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  mProduct: Product;

  imageSrc: ArrayBuffer | string;
  baseAPIURL = environment.baseAPIURL;

  constructor(private location: Location,
    private activatedRoute: ActivatedRoute, private restService: RestService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.feedData(params.id);
      }
    );
  }

  feedData(id: number) {
    this.restService.getProduct(id).subscribe(
      data => {
        this.mProduct = data.result;
      },
      error => {
        alert(error);
      }
    );
  }

  onUploadImage(event) {
    const metaImage = event.target.files[0];

    if (metaImage) {
      const reader = new FileReader();
      reader.readAsDataURL(metaImage);
      reader.onload = () => {
        this.imageSrc = reader.result;
        this.mProduct.image = metaImage;
      };
    }
  }

  onClickCancel() {
    this.location.back();
  }

  submitForm() {
    const formData = new FormData();
    formData.append('name', this.mProduct.name);
    formData.append('price', this.mProduct.price.toString());
    formData.append('stock', this.mProduct.stock.toString());
    formData.append('upload_file', this.mProduct.image);

    this.restService.editProduct(formData, this.mProduct.productId).subscribe(
      data => {
          this.location.back();
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }


}
