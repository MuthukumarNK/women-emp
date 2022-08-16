import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSectorsAgricultureComponent } from './training-sectors-agriculture.component';

describe('TrainingSectorsAgricultureComponent', () => {
  let component: TrainingSectorsAgricultureComponent;
  let fixture: ComponentFixture<TrainingSectorsAgricultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSectorsAgricultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingSectorsAgricultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
