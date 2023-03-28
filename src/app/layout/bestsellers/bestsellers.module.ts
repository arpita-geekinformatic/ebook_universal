import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BestsellersRoutingModule } from './bestsellers-routing.module';
import { BestsellersComponent } from './bestsellers.component';

@NgModule({
  declarations: [BestsellersComponent],
  imports: [
    CommonModule,
    SharedModule,
    BestsellersRoutingModule
  ]
})
export class BestsellersModule { }
