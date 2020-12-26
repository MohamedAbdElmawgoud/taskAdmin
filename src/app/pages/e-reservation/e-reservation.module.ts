import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EReservationRoutingModule } from './e-reservation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EReservationComponent } from "src/app/pages/e-reservation/e-reservation.component";


@NgModule({
  declarations: [EReservationComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule,
    EReservationRoutingModule 
  ]

})
export class EReservationModule { }
