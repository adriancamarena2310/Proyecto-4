import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';


@NgModule({
  imports: [],
  exports: [
   // MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    PanelModule,
    FieldsetModule
  ],
  declarations: [],
  providers: [],
})
export class PrimeNGModule { }
