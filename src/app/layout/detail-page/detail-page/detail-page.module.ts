import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPageRoutingModule } from './detail-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailPageComponent } from './detail-page.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DetailPageComponent],
  imports: [
    CommonModule,
    DetailPageRoutingModule,
    SharedModule,
    NgbModule,
    ShareButtonsModule,
    ShareIconsModule,
    ReactiveFormsModule
  ]
})
export class DetailPageModule { }
