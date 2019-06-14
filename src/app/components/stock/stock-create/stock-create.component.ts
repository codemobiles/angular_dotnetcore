import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Location } from '@angular/common';
import { RestService } from 'src/app/services/rest.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  mProduct: Product = new Product();

  imageSrc: ArrayBuffer | string;

  mIsSubmitted = false;

  constructor(private restService: RestService, private location: Location, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  submitForm() {

    this.spinner.show();

    const formData = new FormData();
    formData.append('name', this.mProduct.name);
    formData.append('price', this.mProduct.price.toString());
    formData.append('stock', this.mProduct.stock.toString());
    formData.append('upload_file', this.mProduct.image);

    this.restService.addProduct(formData).subscribe(
      data => {
        const product: Product = data.result;
        if (product != null) {
          this.mIsSubmitted = true;
          setTimeout(() => {
            this.spinner.hide();
            this.location.back();
          }, 1000);
        }
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  onClickBack() {
    this.location.back();
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




}
