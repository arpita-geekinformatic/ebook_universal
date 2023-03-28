import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPodcastsRoutingModule } from './all-podcasts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllPodcastsComponent } from './all-podcasts.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [AllPodcastsComponent],
  imports: [
    CommonModule,
    AllPodcastsRoutingModule,
    SharedModule,
    NgbModule,
    InfiniteScrollModule
  ]
})
export class AllPodcastsModule { }
