import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNgoDetailsComponent } from './admin-ngo-details.component';

describe('AdminNgoDetailsComponent', () => {
  let component: AdminNgoDetailsComponent;
  let fixture: ComponentFixture<AdminNgoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNgoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNgoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
