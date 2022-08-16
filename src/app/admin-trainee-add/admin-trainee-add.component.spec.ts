import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTraineeAddComponent } from './admin-trainee-add.component';

describe('AdminTraineeAddComponent', () => {
  let component: AdminTraineeAddComponent;
  let fixture: ComponentFixture<AdminTraineeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTraineeAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTraineeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
