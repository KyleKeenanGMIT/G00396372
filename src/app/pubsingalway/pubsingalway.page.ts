import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pubsingalway',
  templateUrl: './pubsingalway.page.html',
  styleUrls: ['./pubsingalway.page.scss'],
})
export class PubsingalwayPage implements OnInit {


  pubs: string[] = ["Skeff Bar,\nThe Olde 55, \nMonroe's, \nHole in the Wall" ];

  constructor() { }

  ngOnInit() {
  }

}
