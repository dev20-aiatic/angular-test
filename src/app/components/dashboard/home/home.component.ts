import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  
  constructor( private auth: AuthService) {
  }


  ngOnInit()  {
  }

    members: {title: string, subtitle: string, photo: string}[] = [
    {title: 'Daniel Pacheco', subtitle: 'Estudiante Ing. Sistemas', photo: '../../../../assets/img/daniel.jpg'},
    {title: 'Mauricio Barva', subtitle: 'Estudiante Ing. Sistemas', photo: '../../../../assets/img/mauricio.jpg'},
  ];
 
}