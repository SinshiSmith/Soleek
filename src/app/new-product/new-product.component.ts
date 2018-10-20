import { ProductsService } from './../products.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
    ) {}
  onSubmit(product) {
    if (!product) { return; }
    product= this.clear(product);
    this.productsService.addProduct(product as Product).subscribe(() => this.location.back());
    // console.log(product); 
  }
  
  clear(product) {
    product.name = product.name.trim();
    product.categories = product.categories.trim();
    product.categories = product.categories.split(" ");
    product.image = product.image.trim();
    return product;
  }
  
  ngOnInit() {
    // this.productsService.getProduct(1).subscribe(product => this.model = product);
  }

}