import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgosFundingnormsComponent } from './ngos-fundingnorms.component';

describe('NgosFundingnormsComponent', () => {
  let component: NgosFundingnormsComponent;
  let fixture: ComponentFixture<NgosFundingnormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgosFundingnormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgosFundingnormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
