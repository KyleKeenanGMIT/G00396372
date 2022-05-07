import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubsingalwayPage } from './pubsingalway.page';

const routes: Routes = [
  {
    path: '',
    component: PubsingalwayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubsingalwayPageRoutingModule {}
