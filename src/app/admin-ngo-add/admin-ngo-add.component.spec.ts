import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNgoAddComponent } from './admin-ngo-add.component';

describe('AdminNgoAddComponent', () => {
  let component: AdminNgoAddComponent;
  let fixture: ComponentFixture<AdminNgoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNgoAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNgoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
