import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSectorsTailoringComponent } from './training-sectors-tailoring.component';

describe('TrainingSectorsTailoringComponent', () => {
  let component: TrainingSectorsTailoringComponent;
  let fixture: ComponentFixture<TrainingSectorsTailoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSectorsTailoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingSectorsTailoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
