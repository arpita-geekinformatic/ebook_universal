import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NarratorsComponent } from './narrators.component';

const routes: Routes = [
  {
    path: '',
    component: NarratorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NarratorsRoutingModule { }
