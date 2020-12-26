import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
// import { } from '@types/googlemaps';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-e-reservation',
  templateUrl: './e-reservation.component.html',
  styleUrls: ['./e-reservation.component.css']
})
export class EReservationComponent implements OnInit {
  basicForm: FormGroup;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  isTracking = false;

  currentLat: any;
  currentLong: any;

  marker: google.maps.Marker;
  location = { latitude: 0, longitude: 0 }
  TaxesEventStatus = false;
  basicInfo = true
  extraInfoStatus = false;
  addTicketStatus= false;
  buyersInfo= false;

  
      
  constructor(private router: Router) { }


  ngOnInit() {
    this.basicForm = new FormGroup({
      
          "EventName": new FormControl('',[ Validators.required]),
          "Expirydate": new FormControl('',[ Validators.required]),
          "EventDescription": new FormControl('',[ Validators.required]),
          "PaymentMessage": new FormControl('',[ Validators.required]),
          // "Paymentoptions": new FormControl('',[ Validators.required]),
          // "showOnShop": new FormControl('',[ Validators.required]),
          // "feesToBuyer": new FormControl('',[ Validators.required]),
          // "TaxesEvent": new FormControl('',[ Validators.required]),
        });
  }

  GoToEstraInfo(){
    if(this.basicForm.valid){
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      })
      this.extraInfoStatus =true;
      this.basicInfo = false
    }
    else{
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
        title: "please enter valid data"
      })
    }
  }
  // to update TaxesStatus
  handleChange(evt){
    var target = evt.target;
    console.log(evt.target)
    if (evt.target.value == "yes") {
       this.TaxesEventStatus = true;
       console.log( this.TaxesEventStatus)
    } else {
      this.TaxesEventStatus = false;
    }
  }

  // to get location latitude and  longitude
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        this.location.latitude = position.coords.latitude
        this.location.longitude = position.coords.longitude
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }




}
