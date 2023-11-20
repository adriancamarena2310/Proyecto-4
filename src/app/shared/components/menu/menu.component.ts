import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor() { }

 public menuItems: MenuItem[] = [];


  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left'
          },{
            label: 'Numeros',
            icon: 'pi pi-dollar'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe'
          }
        ]
      },{
        label: 'Pipes personalisados',
        icon: 'pi pi-cog',
        items:[
          {
            label: 'otro elemento',
            icon: 'pi pi-cog'
          }
        ]
      }
    ];


  }

}
