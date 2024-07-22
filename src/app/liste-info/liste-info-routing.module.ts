import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeInfoPage } from './liste-info.page';

const routes: Routes = [
  {
    path: '',
    component: ListeInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeInfoPageRoutingModule {}
