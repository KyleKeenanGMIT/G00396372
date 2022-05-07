import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-weatherstatus',
  templateUrl: './weatherstatus.page.html',
  styleUrls: ['./weatherstatus.page.scss'],
})
export class WeatherstatusPage implements OnInit {
myStatus:string = "";
  constructor(private storage:Storage) { }

  ngOnInit() {
  }
//data persistence.
  saveStatus(){
this.storage.create()
.then(()=>{
  this.storage.set("status", this.myStatus)
  .then(()=>{console.log(this.myStatus)})
  .catch();
})
.catch();
  }

}
