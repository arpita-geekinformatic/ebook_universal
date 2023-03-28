import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPodcastsComponent } from './all-podcasts.component';

const routes: Routes = [
  {
    path: '',
    component: AllPodcastsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPodcastsRoutingModule { }
