import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherstatusPage } from './weatherstatus.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherstatusPageRoutingModule {}
