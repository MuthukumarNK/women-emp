import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSectorsStitchingComponent } from './training-sectors-stitching.component';

describe('TrainingSectorsStitchingComponent', () => {
  let component: TrainingSectorsStitchingComponent;
  let fixture: ComponentFixture<TrainingSectorsStitchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSectorsStitchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingSectorsStitchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
