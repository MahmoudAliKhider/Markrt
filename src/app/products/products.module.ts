import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetalisComponent } from './components/products-detalis/products-detalis.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetalisComponent
  ],
  imports: [
    CommonModule,
    
   
  ]
})
export class ProductsModule { }
