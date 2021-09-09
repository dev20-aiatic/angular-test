import { ProfileService } from './../../../services/profile.service';
import { Profile } from './../../../interfaces/User';
import { WebService } from './../../../services/web.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  breakpoint: number;
  public users;

  profileForm = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    natIdCard: ['', [Validators.required, Validators.minLength(9), Validators.pattern(/^[0-9]\d*$/)]],
    DoB: ['', Validators.required],
    city: ['', Validators.required],
    department: ['', Validators.required],
    country: ['', Validators.required],
    postalcode: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ],
    career: ['', Validators.required],
    skill_Id: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor( private fb: FormBuilder, private auth: AuthService, private webService: WebService) {}
  
  public skills;
  profiles: any = [];

  departments: any = [];
  city;
  cities: any = [];
  department;
  details: Profile;
  

  async ngOnInit()  {

   /*  this.auth.user
      .subscribe(res => { this.users  = res; },
        error => console.error(error));
        console.log(this.users); */
  
    this.departments = await this.webService.getDepartments();

  }
  

  /* getProfile() {
    return this.authService.getProfile().subscribe(
      (res) => {
        this.profiles = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
 */
  //Declaramos función para alternar los select de los material select input "deparment" "city"
  deparmentChangeAction(department) {
    this.city = '';
    let dropDownData = this.departments.find(
      (data: any) => data.region === department
    );
    if (dropDownData) {
      this.cities = dropDownData.cities;
      if (this.cities) {
        this.city = this.cities[0];
      }
    } else {
      this.cities = [];
    }
  }
  
/**Metodo que me devuelve la información del usuario */
get userData() {
  return this.auth.userlogged;
}
  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 4;
  }
}
