import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactUsComponent } from './contact-us.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactUsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactUsModule { }
