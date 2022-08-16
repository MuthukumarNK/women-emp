import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNgoEditComponent } from './admin-ngo-edit.component';

describe('AdminNgoEditComponent', () => {
  let component: AdminNgoEditComponent;
  let fixture: ComponentFixture<AdminNgoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNgoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNgoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
