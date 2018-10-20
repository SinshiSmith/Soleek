import { EdtProductComponent } from './edt-product/edt-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'new', component: NewProductComponent},
  {path: 'edit/:id', component: EdtProductComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
