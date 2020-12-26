import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EReservationRoutingModule } from './e-reservation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule,
    EReservationRoutingModule 
  ]
  ,exports:[ReactiveFormsModule,FormsModule]
})
export class EReservationModule { }
