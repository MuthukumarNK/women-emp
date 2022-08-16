import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRegistrationComponent } from './step-registration.component';

describe('StepRegistrationComponent', () => {
  let component: StepRegistrationComponent;
  let fixture: ComponentFixture<StepRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
