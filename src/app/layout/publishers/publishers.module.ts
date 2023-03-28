import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublishersRoutingModule } from './publishers-routing.module';
import { PublishersComponent } from './publishers.component';


@NgModule({
  declarations: [PublishersComponent],
  imports: [
    CommonModule,
    SharedModule,
    PublishersRoutingModule
  ]
})
export class PublishersModule { }
