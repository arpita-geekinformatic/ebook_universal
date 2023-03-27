import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PodcastRoutingModule } from './podcast-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PodcastComponent } from './podcast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


@NgModule({
  declarations: [PodcastComponent],
  imports: [
    CommonModule,
    PodcastRoutingModule,
    SharedModule,
    NgbModule,
    ShareButtonsModule,
    ShareIconsModule,
  ]
})
export class PodcastModule { }
