import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkWithUsRoutingModule } from './work-with-us-routing.module';
import { WorkWithUsComponent } from './work-with-us.component'

@NgModule({
  declarations: [WorkWithUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    WorkWithUsRoutingModule
  ]
})
export class WorkWithUsModule { }
