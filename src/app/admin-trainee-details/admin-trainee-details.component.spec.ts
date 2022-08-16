import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTraineeDetailsComponent } from './admin-trainee-details.component';

describe('AdminTraineeDetailsComponent', () => {
  let component: AdminTraineeDetailsComponent;
  let fixture: ComponentFixture<AdminTraineeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTraineeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTraineeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
