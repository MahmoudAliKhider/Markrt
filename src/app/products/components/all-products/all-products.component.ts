import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
products:any[]=[];
categories:any[]=[];
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProduct(); 
    this.getCategories();
  }

  getProduct(){
    this.service.getAllProducts().subscribe((res:any)=>{
    this.products=res;
    },error=>{
      alert("error")
    })
  }
  getCategories(){
    this.service.getAllCategoris().subscribe((res:any)=>{
    this.categories=res;
  },error=>{
    alert("error")
  })
  }
  filterCategory(event:any){
    let value = event.target.value;
    if(value=='all'){
      this.getProduct();
    }else{
    this.getProductCategory(value);
    }
  }
  getProductCategory(keyword:string){
    this.service.getProductsByCatrgory(keyword).subscribe((res:any)=>{
      this.products=res;
    },error=>{
      alert("error")
    })
  }
}
