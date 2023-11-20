import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

@NgModule({
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports: [
    MenuComponent,
  ],
  declarations: [
    MenuComponent
  ],
  providers: [],
})
export class SharedModule { }
