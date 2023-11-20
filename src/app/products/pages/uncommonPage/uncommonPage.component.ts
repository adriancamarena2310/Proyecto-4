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

  //i18Plural
  public clients: string[] = ["Maria", "Jose", "Melisa", "Fernando", "Pedro", "Manuel"];
  public clientMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // keyValue pipe
  public person = {
    name: 'Adrian',
    age: '17',
    address: 'Ottawa, Canada'
  }

}
