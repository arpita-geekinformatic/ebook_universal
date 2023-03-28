import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpubReaderComponent } from './epub-reader.component';

const routes: Routes = [
  {
    path: '',
    component: EpubReaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpubReaderRoutingModule { }
