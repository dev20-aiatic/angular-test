/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlognewComponent } from './blognew.component';

describe('BlognewComponent', () => {
  let component: BlognewComponent;
  let fixture: ComponentFixture<BlognewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlognewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlognewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
