import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewBooksRoutingModule } from './new-books-routing.module';
import { NewBooksComponent } from './new-books.component';


@NgModule({
  declarations: [NewBooksComponent],
  imports: [
    CommonModule,
    SharedModule,
    NewBooksRoutingModule
  ]
})
export class NewBooksModule { }
