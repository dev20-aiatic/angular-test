import { Person } from './../../../interfaces/person';
import { SkillService } from '../../../services/skill.service';
import { PersonService } from '../../../services/person.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})


export class PersonComponent implements OnInit {
  public person;
  public skills;
  public search: string;

  columnsToDisplay  = ['id', 'name', 'lastname', 'natID', 'birthdate', 'city', 'department', 'country', 'postalcode', 'career', 'skills', 'description', 'createdat', 'updatedat'];
  dataSource = new MatTableDataSource<Person>();

  constructor(public personService: PersonService, public skillService: SkillService) { }
  
  ngOnInit(): void {
    this.getAll();

    this.skillService.getAll()
      .subscribe(res => { this.skills = res; },
        error => console.error(error));
  }

  searchPerson() {
    if (!this.search) {
      this.getAll();
    } else {
      this.getPersonByQuery();
    }
  }

  getAll() {
    return this.personService.getAll()
      .subscribe(res => { this.person = res; },
        error => console.error(error));
  }

  getPersonBySkill(personId){
    return this.personService.getPersonBySkill(personId)
      .subscribe(res => { this.person = res; },
        error => console.error(error));
  }

  getPersonByQuery() {
    return this.personService.getPersonByQuery(this.search)
      .subscribe(res => { this.person = res; },
        error => console.error(error));
  }

  public redirectToDetails = (id: string) => {
    
  }
  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {
    
  }

}


