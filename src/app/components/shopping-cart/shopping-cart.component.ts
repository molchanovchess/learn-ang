import { Component, OnInit } from '@angular/core';

interface Product {
  sno : string;
  name : string;
  image : string;
  price : number;
  qty : number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products:Array<Product> = [
    {
      sno : 'AA101',
      name : 'Mi Watch',
      image : 'https://m.media-amazon.com/images/I/5165Fqd1roL._AC_SL1000_.jpg',
      price : 1500,
      qty : 2
    },
    {
      sno : 'AA102',
      name : 'Apple Watch',
      image : 'https://m.media-amazon.com/images/I/71n4irSjX3L._AC_SL1500_.jpg',
      price : 1800,
      qty : 2
    },
    {
      sno : 'AA103',
      name : 'Redme Watch',
      image : 'https://m.media-amazon.com/images/I/71MjIrjE8hL._AC_SL1500_.jpg',
      price : 1400,
      qty : 2
    },
    {
      sno : 'AA104',
      name : 'Oppo Watch',
      image : 'https://m.media-amazon.com/images/I/71SLwmc2KbS._AC_UL1500_.jpg',
      price : 1200,
      qty : 2
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public incrQty(productId : string):void{
    this.products = this.products.map((product) => {
      if (product.sno === productId){
        return {
          ...product,
          qty : product.qty + 1
        }
      }
      return product;
    })
  }

  public decrQty(productId : string):void{
    this.products = this.products.map((product: Product) => {
      if (product.sno === productId){
        return {
          ...product,
          qty : product.qty - 1 > 1 ? product.qty - 1 : 1
        }
      }
      return product;
    })
  }

  public calcGrandTotal():number{
    let total:number = 0;
    for(let product of this.products){
      total += (product.qty * product.price);
    }
    return total;
  }

}
