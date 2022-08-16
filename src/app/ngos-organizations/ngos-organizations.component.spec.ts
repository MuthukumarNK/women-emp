import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgosOrganizationsComponent } from './ngos-organizations.component';

describe('NgosOrganizationsComponent', () => {
  let component: NgosOrganizationsComponent;
  let fixture: ComponentFixture<NgosOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgosOrganizationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgosOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
