import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, ScrollTopComponent],

  exports: [HeaderComponent, FooterComponent, ScrollTopComponent],
  imports: [CommonModule, NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule],
})
export class SharedModule { }
