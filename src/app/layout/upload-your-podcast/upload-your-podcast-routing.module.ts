import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadYourPodcastComponent } from './upload-your-podcast.component';

const routes: Routes = [
  {
    path: '',
    component: UploadYourPodcastComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadYourPodcastRoutingModule { }
