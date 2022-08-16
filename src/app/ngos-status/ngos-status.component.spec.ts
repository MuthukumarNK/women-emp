import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgosStatusComponent } from './ngos-status.component';

describe('NgosStatusComponent', () => {
  let component: NgosStatusComponent;
  let fixture: ComponentFixture<NgosStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgosStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgosStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
