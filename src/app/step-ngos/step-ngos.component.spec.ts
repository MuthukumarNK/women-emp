import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepNgosComponent } from './step-ngos.component';

describe('StepNgosComponent', () => {
  let component: StepNgosComponent;
  let fixture: ComponentFixture<StepNgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepNgosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepNgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
