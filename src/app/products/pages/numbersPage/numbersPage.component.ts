import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbersPage',
  templateUrl: './numbersPage.component.html',
})
export class NumbersPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public totalSells: number = 2342132.3121;
  public percent: number = 0.2342132;

}
