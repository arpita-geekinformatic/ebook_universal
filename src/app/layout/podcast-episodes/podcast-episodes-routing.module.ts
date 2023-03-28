import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastEpisodesComponent } from './podcast-episodes.component';

const routes: Routes = [
  {
    path: '',
    component: PodcastEpisodesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastEpisodesRoutingModule { }
