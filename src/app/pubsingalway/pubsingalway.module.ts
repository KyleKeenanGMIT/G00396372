import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubsingalwayPageRoutingModule } from './pubsingalway-routing.module';

import { PubsingalwayPage } from './pubsingalway.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubsingalwayPageRoutingModule
  ],

  exports: [PubsingalwayPage],
  declarations: [PubsingalwayPage]
})
export class PubsingalwayPageModule {}
