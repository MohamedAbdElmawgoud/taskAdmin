import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReservationComponent } from './e-reservation.component';

describe('EReservationComponent', () => {
  let component: EReservationComponent;
  let fixture: ComponentFixture<EReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
