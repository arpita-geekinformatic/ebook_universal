import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CookiePolicyRoutingModule } from './cookie-policy-routing.module';
import { CookiePolicyComponent } from './cookie-policy.component';

@NgModule({
  declarations: [CookiePolicyComponent],
  imports: [
    SharedModule,
    CommonModule,
    CookiePolicyRoutingModule
  ]
})
export class CookiePolicyModule { }
