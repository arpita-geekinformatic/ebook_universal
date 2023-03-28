import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurAppsComponent } from './our-apps.component';

const routes: Routes = [
  {
    path: '',
    component: OurAppsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurAppsRoutingModule { }
