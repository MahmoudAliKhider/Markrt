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
 loading:boolean=false;
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProduct(); 
    this.getCategories();
  }

  getProduct(){
    this.loading=true;
    this.service.getAllProducts().subscribe((res:any)=>{
    this.products=res;
    this.loading=false;
    },error=>{
      this.loading=false;
      alert("error")
    })
  }
  getCategories(){
    this.loading=true;
    this.service.getAllCategoris().subscribe((res:any)=>{
    this.categories=res;
    this.loading=false;
  },error=>{
    alert("error");
    this.loading=false;
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
    this.loading=true;
    this.service.getProductsByCatrgory(keyword).subscribe((res:any)=>{
      this.products=res;
      this.loading=false;
    })
  }
}
