import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { UncommonPageComponent } from './pages/uncommonPage/uncommonPage.component';
import { NumbersPageComponent } from './pages/numbersPage/numbersPage.component';
import { BasicsPageComponent } from './pages/basicsPage/basicsPage.component';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/roggle-case.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNGModule,
  ],
  declarations: [
    UncommonPageComponent,
    NumbersPageComponent,
    BasicsPageComponent,
    OrderComponent,
    ToggleCasePipe,
  ]
})
export class ProductsModule { }
