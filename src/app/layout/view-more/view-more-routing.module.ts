import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMoreComponent } from './view-more.component';

const routes: Routes = [{
  path: '',
  component: ViewMoreComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewMoreRoutingModule { }
