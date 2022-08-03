import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor() { }
  cartproduct:any[]=[]
  total:any=0;
  ngOnInit(): void {
    this.getCartProduct()
  }

  getCartProduct(){
    if("cart" in localStorage){
    this.cartproduct=JSON.parse(localStorage.getItem("cart")!)
    // console.log(this.cartproduct)
    }
   this.getTotal();
  }
  getTotal(){
    this.total=0;
    for(let x in this.cartproduct){
      this.total+=this.cartproduct[x].item.price * this.cartproduct[x].quantity;
    }
  }

}
