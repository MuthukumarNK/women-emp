import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgosRegisterComponent } from './ngos-register.component';

describe('NgosRegisterComponent', () => {
  let component: NgosRegisterComponent;
  let fixture: ComponentFixture<NgosRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgosRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgosRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
