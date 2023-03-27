import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangePasswordComponent } from './change-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class ChangePasswordModule { }
