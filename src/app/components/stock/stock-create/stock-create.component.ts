import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Location } from '@angular/common';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  mProduct: Product = new Product();

  imageSrc: ArrayBuffer | string;

  constructor(private restService:RestService, private location: Location) { }

  ngOnInit() {
  }

  submitForm() {


    const formData = new FormData();
    formData.append('name', this.mProduct.name);
    formData.append('price', this.mProduct.price.toString());
    formData.append('stock', this.mProduct.stock.toString());
    formData.append('upload_file', this.mProduct.image);

    this.restService.addProduct(formData).subscribe(
      data => {
          this.location.back();
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
