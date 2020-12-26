import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
// import { } from '@types/googlemaps';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-e-reservation',
  templateUrl: './e-reservation.component.html',
  styleUrls: ['./e-reservation.component.css']
})
export class EReservationComponent implements OnInit {
  dateTo: string;
  dateFrom: any;
  price: any;
  DescriptionTicket: any;
  addTicketForm: FormGroup;
  extraForm: FormGroup;
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
  addTicketStatus = false;
  buyersInfo = false;
  DescriptionEvent
  ticketName; 
  maxQuntity;
 TotalQuntity;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.basicForm = this.fb.group({

      EventName: ['', [Validators.required]],
      Expirydate: ['', [Validators.required]],
      EventDescription: ['', [Validators.required]],
      PaymentMessage: ['', [Validators.required]],

    });
    this.extraForm = this.fb.group({

      // image:  ['', [Validators.required]],
      DurationFrom: ['', [Validators.required]],
      DurationTo: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      // Location:['', [Validators.required]],
      Delivery: ['', [Validators.required]],
      Return: ['', [Validators.required]],

    });

    this.addTicketForm = this.fb.group({
      
      // image:  ['', [Validators.required]],
      TicketName: ['', [Validators.required]],
      Total : ['', [Validators.required , Validators.min(1)]],
      Max : ['', [Validators.required, Validators.min(1) ]],
      Expirydate: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      price: ['', [Validators.required , Validators.min(1)]],

    });
  }

  GoToEstraInfo() {
    if (this.basicForm.valid) {
      let params = { ...this.basicForm.value }
      this.DescriptionEvent = params.EventDescription
      let Expirydate = new Date(params.Expirydate)

      let dateObj = new Date();
      let month = dateObj.getMonth() + 1;
      let day = String(dateObj.getDate()).padStart(2, '0');
      let year = dateObj.getFullYear();
      let output = year + '-' + month + '-' + day;
      let expireMonth = Expirydate.getMonth() + 1
      let expireDateFormat = Expirydate.getFullYear() + '-' + expireMonth + '-' + String(Expirydate.getDate()).padStart(2, '0');
      this.dateFrom = expireDateFormat;
      console.log('ex', output, 'no', expireDateFormat)
      if (expireDateFormat < output) {
        Swal.fire({
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
          title: "Your date is expired "
        })
        return;
      }
      else {
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        })
        this.extraInfoStatus = true;
        this.basicInfo = false
      }

    }
    else {
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
        title: "please enter valid data"
      })
    }
  }

  GoToAddTicket() {
    console.log(this.extraForm.valid)
    if (this.extraForm.valid) {
      let params = { ...this.extraForm.value }
      
      let ExpirydateFrom = new Date(params.DurationFrom)
      let ExpirydateTo = new Date(params.DurationTo)
      let dateObj = new Date();
      let month = dateObj.getMonth() + 1;
      let day = String(dateObj.getDate()).padStart(2, '0');
      let year = dateObj.getFullYear();
      let output = year + '-' + month + '-' + day;
      let expireMonth = ExpirydateFrom.getMonth() + 1
      let expireDateFormFormat = ExpirydateFrom.getFullYear() + '-' + expireMonth + '-' + String(ExpirydateFrom.getDate()).padStart(2, '0');
      let expireMonthTO = ExpirydateFrom.getMonth() + 1
      let ExpirydateToFormat = ExpirydateTo.getFullYear() + '-' + expireMonth + '-' + String(ExpirydateTo.getDate()).padStart(2, '0');
      
      console.log('ex', output, 'no', expireDateFormFormat, ExpirydateToFormat)
      if (expireDateFormFormat < ExpirydateToFormat) {
        if (expireDateFormFormat < output) {

          Swal.fire({
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
            title: "Your date is expired "
          })
          return;
        }

      }
      else {
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        })
        
        
        this.extraInfoStatus = true;
        this.basicInfo = false
      }

      this.addTicketStatus = true;
      this.extraInfoStatus = false
      this.basicInfo = false
    }
    else {
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
        title: "please enter valid data"
      })
    }
  }


 goToShowInfo(){
 
  if (this.addTicketForm.valid) {
    let params = { ...this.addTicketForm.value }
    this.DescriptionTicket = params.Description
    this.maxQuntity = params.Max;
    this.ticketName = params.TicketName;
    this.TotalQuntity = params.Total;
    this.price = params.price
    let Expirydate = new Date(params.Expirydate)

    let dateObj = new Date();
    let month = dateObj.getMonth() + 1;
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let output = year + '-' + month + '-' + day;
    let expireMonth = Expirydate.getMonth() + 1
    let expireDateFormat = Expirydate.getFullYear() + '-' + expireMonth + '-' + String(Expirydate.getDate()).padStart(2, '0');
    this.dateTo = expireDateFormat
    console.log('ex', output, 'no', expireDateFormat)
    if (expireDateFormat < output) {
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
        title: "Your date is expired "
      })
      return;
    }
   
      if(params.Total >= params.Max){
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        })
        this.addTicketStatus = false;
        this.extraInfoStatus = false
        this.basicInfo = false;
        this.buyersInfo = true;
       
      }
      else{
        Swal.fire({
     icon: 'error',
     showConfirmButton: false,
     timer: 1500,
     title: "Your Max Quntity is greater than  Total Quntity "
   })
   return;
     }
      
    

  }
  else {
    Swal.fire({
      icon: 'error',
      showConfirmButton: false,
      timer: 1500,
      title: "please enter valid data"
    })
  }
}

  // to update TaxesStatus
  handleChange(evt) {
    var target = evt.target;
    console.log(evt.target)
    if (evt.target.value == "yes") {
      this.TaxesEventStatus = true;
      console.log(this.TaxesEventStatus)
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
