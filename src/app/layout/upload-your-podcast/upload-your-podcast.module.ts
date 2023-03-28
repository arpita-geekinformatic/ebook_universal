import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UploadYourPodcastRoutingModule } from './upload-your-podcast-routing.module';
import { UploadYourPodcastComponent } from './upload-your-podcast.component';

@NgModule({
  declarations: [UploadYourPodcastComponent],
  imports: [
    CommonModule,
    SharedModule,
    UploadYourPodcastRoutingModule
  ]
})
export class UploadYourPodcastModule { }
