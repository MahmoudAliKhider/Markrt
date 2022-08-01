import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-detalis',
  templateUrl: './products-detalis.component.html',
  styleUrls: ['./products-detalis.component.css']
})
export class ProductsDetalisComponent implements OnInit {
 id:any
 data:any={}
  constructor(private route:ActivatedRoute,private service:ProductsService) { 
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts()
  {
   this.service.getProductsById(this.id).subscribe(res=>{
    this.data=res
   })
  }
}
