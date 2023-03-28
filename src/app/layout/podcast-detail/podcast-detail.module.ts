import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastDetailRoutingModule } from './podcast-detail-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { PodcastDetailComponent } from './podcast-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [PodcastDetailComponent],
  imports: [
    CommonModule,
    PodcastDetailRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    ShareButtonsModule,
    ShareIconsModule,
  ]
})
export class PodcastDetailModule { }
