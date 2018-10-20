import { Location } from '@angular/common';
import { ProductsService } from './../products.service';
import { Product } from './../product';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edt-product',
  templateUrl: './edt-product.component.html',
  styleUrls: ['./edt-product.component.css']
})
export class EdtProductComponent implements OnInit {

  @Input() product:Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  save() {
    this.productsService.updareProduct(this.product)
      .subscribe(() => this.location.back());
  }
}
