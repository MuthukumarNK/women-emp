import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTraineesComponent } from './admin-trainees.component';

describe('AdminTraineesComponent', () => {
  let component: AdminTraineesComponent;
  let fixture: ComponentFixture<AdminTraineesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTraineesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTraineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
