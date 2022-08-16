import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTraineeEditComponent } from './admin-trainee-edit.component';

describe('AdminTraineeEditComponent', () => {
  let component: AdminTraineeEditComponent;
  let fixture: ComponentFixture<AdminTraineeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTraineeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTraineeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
