import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile;
  public skills;

  profileForm = this.fb.group({
    name: [null, Validators.required],
    lastname: [null, Validators.required],
    natIdCard: [null, Validators.required],
    DoB: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    country:[null, Validators.required],
    postalcode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    career:[null, Validators.required],
    skill_Id:[null, Validators.required],
    description:['free', Validators.required],
    shipping: ['free', Validators.required]
  });


  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  breakpoint: number;
  

  constructor(private fb: FormBuilder, private profileService:ProfileService) {

  }


  ngOnInit(): void {
    this.getAll();

    this.profileService.getAll()
    .subscribe(res => { this.skills = res; },
      error => console.error(error));
  }

  getAll() {
    return this.profileService.getAll()
      .subscribe(res => { this.profile = res; },
        error => console.error(error));
  }
  
onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
}
}