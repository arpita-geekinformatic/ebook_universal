import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { EpubReaderRoutingModule } from './epub-reader-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ReactiveFormsModule } from '@angular/forms';
import { EpubReaderComponent } from './epub-reader.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [EpubReaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    ShareButtonsModule,
    ShareIconsModule,
    ReactiveFormsModule,
    EpubReaderRoutingModule,
    CarouselModule
  ]
})
export class EpubReaderModule { }
