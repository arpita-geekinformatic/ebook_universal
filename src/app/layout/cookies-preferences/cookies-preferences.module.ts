import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CookiesPreferencesRoutingModule } from './cookies-preferences-routing.module';
import { CookiesPreferencesComponent } from './cookies-preferences.component';

@NgModule({
  declarations: [CookiesPreferencesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CookiesPreferencesRoutingModule
  ]
})
export class CookiesPreferencesModule { }
