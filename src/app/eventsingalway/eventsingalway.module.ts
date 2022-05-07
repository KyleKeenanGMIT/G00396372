import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsingalwayPageRoutingModule } from './eventsingalway-routing.module';

import { EventsingalwayPage } from './eventsingalway.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsingalwayPageRoutingModule
  ],
  exports: [EventsingalwayPage],
  declarations: [EventsingalwayPage]
})
export class EventsingalwayPageModule {}
