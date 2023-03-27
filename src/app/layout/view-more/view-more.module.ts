import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewMoreRoutingModule } from './view-more-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewMoreComponent } from './view-more.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [ViewMoreComponent],
  imports: [
    CommonModule,
    ViewMoreRoutingModule,
    SharedModule,
    NgbModule,
    InfiniteScrollModule
  ]
})
export class ViewMoreModule { }
