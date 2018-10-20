import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
@Component({
  selector: 'Products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private ProductsService: ProductsService) { }

  getProducts() {
    this.ProductsService.getProducts()
      .subscribe(products => this.products = products);
  }
  delete(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.ProductsService.deleteProduct(product).subscribe();
  }
  ngOnInit() {
    this.getProducts();
  }

}
