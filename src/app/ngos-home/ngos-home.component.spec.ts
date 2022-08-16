import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgosHomeComponent } from './ngos-home.component';

describe('NgosHomeComponent', () => {
  let component: NgosHomeComponent;
  let fixture: ComponentFixture<NgosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgosHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
