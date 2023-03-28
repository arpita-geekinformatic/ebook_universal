import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbookReaderRoutingModule } from './ebook-reader-routing.module';
import { EbookReaderComponent } from './ebook-reader.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    EbookReaderComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    CarouselModule,
    SharedModule,
    EbookReaderRoutingModule
  ]
})
export class EbookReaderModule { }
