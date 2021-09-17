import { AuthService } from 'src/app/services/dashgular/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Nombre', 'Correo', 'Creado', 'Mod'];
  dataSource = new MatTableDataSource<User>();
  private users;
  breakpoint: number;

  constructor( private auth: AuthService) {
  }

  async ngOnInit()  {
    this.auth.getUsers().subscribe(users=>{
      this.users = users;
      this.dataSource.data = this.users;
    })
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 4;
  }
}
