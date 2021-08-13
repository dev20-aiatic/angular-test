import { SkillService } from './../../services/skill.service';
import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  public person;
  public skills;
  public search: string;

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
  getPersonBySkill(categoryId){
    return this.personService.getPersonBySkill(categoryId)
      .subscribe(res => { this.person = res; },
        error => console.error(error));
  }

  getPersonByQuery() {
    return this.personService.getPersonByQuery(this.search)
      .subscribe(res => { this.person = res; },
        error => console.error(error));
  }

}

