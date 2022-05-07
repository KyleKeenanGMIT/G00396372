import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsingalwayPage } from './eventsingalway.page';

const routes: Routes = [
  {
    path: '',
    component: EventsingalwayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsingalwayPageRoutingModule {}
