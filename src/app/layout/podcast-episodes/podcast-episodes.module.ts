import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastEpisodesRoutingModule } from './podcast-episodes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PodcastEpisodesComponent } from './podcast-episodes.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [PodcastEpisodesComponent],
  imports: [
    CommonModule,
    PodcastEpisodesRoutingModule,
    SharedModule,
    NgbModule,
    InfiniteScrollModule
  ]
})
export class PodcastEpisodesModule { }
