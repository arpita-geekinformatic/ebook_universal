import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiesPreferencesComponent } from './cookies-preferences.component';

const routes: Routes = [
  {
    path: '',
    component: CookiesPreferencesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookiesPreferencesRoutingModule { }
