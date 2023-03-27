import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NarratorsRoutingModule } from './narrators-routing.module';
import { NarratorsComponent } from './narrators.component';


@NgModule({
  declarations: [
    NarratorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NarratorsRoutingModule
  ]
})
export class NarratorsModule { }
