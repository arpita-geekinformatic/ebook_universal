import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsPodcastRoutingModule } from './faqs-podcast-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqsPodcastComponent } from './faqs-podcast.component';


@NgModule({
  declarations: [
    FaqsPodcastComponent
  ],
  imports: [
    CommonModule,
    FaqsPodcastRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class FaqsPodcastModule { }
