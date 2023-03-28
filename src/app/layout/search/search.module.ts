import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    NgbModule,
    InfiniteScrollModule
  ]
})
export class SearchModule { }
