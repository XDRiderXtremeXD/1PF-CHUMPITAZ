import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyersComponent } from './buyers.component';



@NgModule({
  declarations: [
    BuyersComponent
  ],
  imports: [
    CommonModule
  ] ,
  exports:[BuyersComponent]
})
export class BuyersModule { }
