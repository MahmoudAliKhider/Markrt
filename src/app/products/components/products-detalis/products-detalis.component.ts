import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detalis',
  templateUrl: './products-detalis.component.html',
  styleUrls: ['./products-detalis.component.css']
})
export class ProductsDetalisComponent implements OnInit {
 id:any
  constructor(private route:ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
  }

}
