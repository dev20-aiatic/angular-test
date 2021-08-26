import { Locations } from './../../../interfaces/Locations';
import { WebService } from './../../../services/web.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  breakpoint: number;

  profileForm = this.fb.group({
    name: [null, Validators.required],
    lastname: [null, Validators.required],
    natIdCard: [null, Validators.required],
    DoB: [null, Validators.required],
    city: [null, Validators.required],
    department: [null, Validators.required],
    country: [null, Validators.required],
    postalcode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ],
    career: [null, Validators.required],
    skill_Id: [null, Validators.required],
    description: ['free', Validators.required],
    shipping: ['free', Validators.required],
  });


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private webService: WebService
  ) {}

  public skills;
  public user_id=1;
  profiles: any = [];

  departments: any = [];
  city;
  cities: any = [];
  department;

  async ngOnInit() {
    this.profiles = await this.auth.getAll();
    this.departments = await this.webService.getDepartments();
    console.log(this.profiles);
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

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 4;
  }
}
