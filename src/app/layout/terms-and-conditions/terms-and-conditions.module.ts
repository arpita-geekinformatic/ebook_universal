import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TermsAndConditionsRoutingModule } from './terms-and-conditions-routing.module';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';

@NgModule({
  declarations: [TermsAndConditionsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TermsAndConditionsRoutingModule
  ]
})
export class TermsAndConditionsModule { }
