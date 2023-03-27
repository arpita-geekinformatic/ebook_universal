import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkWithUsComponent } from './work-with-us.component';

const routes: Routes = [
  {
    path: '',
    component: WorkWithUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkWithUsRoutingModule { }
