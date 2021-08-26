import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() { }
  members: {title: string, subtitle: string, photo: string}[] = [
    {title: 'Daniel Pacheco', subtitle: 'Estudiante Ing. Sistemas', photo: '../../../../assets/img/daniel.jpg'},
    {title: 'Mauricio Barva', subtitle: 'Estudiante Ing. Sistemas', photo: '../../../../assets/img/mauricio.jpg'},
  ];
}
