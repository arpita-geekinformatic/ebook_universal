import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestsellersComponent } from './bestsellers.component';

const routes: Routes = [
  {
    path: '',
    component: BestsellersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestsellersRoutingModule { }
