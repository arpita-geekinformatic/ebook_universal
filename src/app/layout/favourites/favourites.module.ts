import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesRoutingModule } from './favourites-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavouritesComponent } from './favourites.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule,
    FavouritesRoutingModule,
    SharedModule,
    NgbModule,
    InfiniteScrollModule
  ]
})
export class FavouritesModule { }
