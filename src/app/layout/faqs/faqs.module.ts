import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FaqsRoutingModule,
    NgbModule
  ]
})
export class FaqsModule { }
