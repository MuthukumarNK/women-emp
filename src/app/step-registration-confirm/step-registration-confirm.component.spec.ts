import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRegistrationConfirmComponent } from './step-registration-confirm.component';

describe('StepRegistrationConfirmComponent', () => {
  let component: StepRegistrationConfirmComponent;
  let fixture: ComponentFixture<StepRegistrationConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepRegistrationConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepRegistrationConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
