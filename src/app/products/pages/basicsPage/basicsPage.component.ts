import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicsPage',
  templateUrl: './basicsPage.component.html',
})
export class BasicsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public nameLower: string = 'adrian';
  public nameUper: string = 'ADRIAN';
  public fullName: string = 'adRiAn cAmaReNa';


  public customDate: Date = new Date();
}
