import { Component, OnInit } from '@angular/core';

interface Product {
  sno : string;
  name : string;
  image : string;
  qty : number;
  price : number;
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product:Product = {
    sno : 'AA101',
    name : 'Mi Watch',
    image : 'https://m.media-amazon.com/images/I/5165Fqd1roL._AC_SL1000_.jpg',
    qty : 2,
    price : 1500
  };

  constructor() { }

  ngOnInit(): void {
  }

  public incrQty():void{
    this.product = {
      ...this.product,
      qty : this.product.qty + 1
    }
  }

  public decrQty():void{
    this.product = {
      ...this.product,
      qty : this.product.qty - 1 > 1 ? this.product.qty - 1 : 1
    }
  }

}
