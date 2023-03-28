import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EbookReaderComponent } from './ebook-reader.component';

const routes: Routes = [
  {
    path: '',
    component: EbookReaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbookReaderRoutingModule { }
