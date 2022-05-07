import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.page.html',
  styleUrls: ['./pubs.page.scss'],
})
export class PubsPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }


  openPubsinGalwayPage(){
this.navCtrl.navigateForward('/pubsingalway');
  }

}
