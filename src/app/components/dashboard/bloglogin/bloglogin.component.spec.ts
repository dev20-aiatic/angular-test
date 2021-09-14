/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogloginComponent } from './bloglogin.component';

describe('BlogloginComponent', () => {
  let component: BlogloginComponent;
  let fixture: ComponentFixture<BlogloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
