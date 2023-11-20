import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public isUpperCase: boolean = false;

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

}
