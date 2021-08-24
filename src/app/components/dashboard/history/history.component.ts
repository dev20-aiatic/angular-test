import { Locations } from './../../../interfaces/Locations';
import { WebService } from './../../../services/web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(webservice:WebService) { }

  ngOnInit() {
    //this.webservice.getLocation().suscribe(location => (this.location = location));
  }

}
