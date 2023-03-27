import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBooksComponent } from './new-books.component';

const routes: Routes = [
  {
    path: '',
    component: NewBooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBooksRoutingModule { }
