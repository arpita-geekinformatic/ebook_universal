import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateProfileRoutingModule } from './update-profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UpdateProfileComponent } from './update-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateProfileComponent],
  imports: [
    CommonModule,
    UpdateProfileRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class UpdateProfileModule { }
