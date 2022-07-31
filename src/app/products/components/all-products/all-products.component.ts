import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
products:any[]=[];
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProduct(); 
  }

  getProduct(){
    this.service.getAllProducts().subscribe((res:any)=>{
    this.products=res;
    })
  }
}
