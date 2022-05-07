import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';//imports

import { EventsingalwayPageModule } from '../eventsingalway/eventsingalway.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
   EventsingalwayPageModule 

  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
