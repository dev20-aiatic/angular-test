import { User } from 'src/app/interfaces/User';
import { Profile } from './../../../interfaces/User';
import { WebService } from './../../../services/dashgular/web.service';
import { AuthService } from 'src/app/services/dashgular/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  details: any = [];
  profileForm:FormGroup;
  departments: any = [];
  city;
  cities: any = [];
  department;
  Msg;
  hideRequiredControl = new FormControl(false);
  breakpoint: number;

  constructor( private fb: FormBuilder, private auth: AuthService, private webService: WebService, private router: Router, private route: ActivatedRoute) {
    this.profileForm = this.fb.group({
      name: [''],
      lastname: ['',Validators.required],
      natIdCard: ['',  Validators.compose([Validators.required, Validators.minLength(9), Validators.pattern(/^[0-9]\d*$/)])],
      DoB: [''],
      city: [''],
      department: [''],
      country: [''],
      postalcode: ['', Validators.compose([Validators.minLength(5),Validators.maxLength(5)])],
      career: [''],
      skill_Id: [''],
      description: [''],
    });
  }
  
  public skills;
  

   async ngOnInit()  {
    this.getProfile();
    this.departments = await this.webService.getDepartments();

  }
  
   getProfile() {
   this.auth.getInfo()
    .subscribe(data => {
      this.details=data;
      console.log(this.details);
      this.profileForm.setValue({
        name: data.user.name,
        lastname:data.user.Profiles['0'].lastname,
        natIdCard:data.user.Profiles['0'].natIdCard,
        DoB: data.user.Profiles['0'].DoB,
        city:data.user.Profiles['0'].city,
        department:data.user.Profiles['0'].department,
        country:data.user.Profiles['0'].country,
        postalcode:data.user.Profiles['0'].postalcode,
        career:data.user.Profiles['0'].career,
        skill_Id:data.user.Profiles['0'].skill_Id,
        description:data.user.Profiles['0'].description,
        })
      },
      (error) => {
        console.log(error);
      }
    );
  }
 
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

/**Metodo que guarda las modificaciones efectuadas*/
save() {
  const val = this.profileForm.value;

  const data = {
    name: val.name,
    lastname: val.lastname,
    natIdCard: val.natIdCard,
    DoB: val.DoB,
    city: val.city,
    department: val.department,
    country: val.country,
    postalcode: val.postalcode,
    career: val.career,
    skills: val.skill_Id,
    description: val.description,
  };
      console.log(data);
      this.auth.update_profile(data)
      .subscribe(
        res => {
          this.Msg = res;
          Swal.fire( 'Mensaje', this.Msg, 'success');
          setTimeout(() => {
            this.router.navigate(['..'], { relativeTo: this.route });
          })
        },
        err => {
          this.Msg = err
          Swal.fire( 'Mensaje', this.Msg, 'error');
        }
      );

  }


  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 4;
  }
}
