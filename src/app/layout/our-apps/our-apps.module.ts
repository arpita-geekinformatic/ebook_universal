import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurAppsRoutingModule } from './our-apps-routing.module';
import { OurAppsComponent } from './our-apps.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [OurAppsComponent],
  imports: [
    CommonModule,
    OurAppsRoutingModule,
    SharedModule,
    NgbModule,
  ]
})
export class OurAppsModule { }
