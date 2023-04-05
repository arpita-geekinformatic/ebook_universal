import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsPodcastComponent } from './faqs-podcast.component';

const routes: Routes = [
  {
    path: '',
    component: FaqsPodcastComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqsPodcastRoutingModule { }
