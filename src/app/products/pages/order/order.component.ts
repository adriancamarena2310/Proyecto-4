import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  public heroes: Hero[] = [
    {
      name:"superman",
      canFly: true,
      color: Color.red
    },{
      name:"Batman",
      canFly: false,
      color: Color.black
    },{
      name:"Robin",
      canFly: false,
      color: Color.red
    },
    {
      name:"Lnterna Verde",
      canFly: true,
      color: Color.gren
    },
    {
      name:"Daredevil",
      canFly: false,
      color: Color.red
    }
  ]

  changeOrder( value: keyof Hero){
     this.orderBy = value;
  }

}
