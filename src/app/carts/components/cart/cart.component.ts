import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproduct:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  getCartProduct(){
    if("cart" in localStorage){
    this.cartproduct=JSON.parse(localStorage.getItem("cart")!)
    }
  }

}
