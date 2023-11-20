import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncommonPage',
  templateUrl: './uncommonPage.component.html',
})
export class UncommonPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // i18nSelect
  public name: string = "Adrian";
  public gender: 'male' | 'female' = 'male';
  public invitacionMap = {
    male: "invitarlo",
    female: "invitarla"
  }

  chandeClient(): void {
     this.name = "Melissa";
     this.gender = "female";
  }
}
