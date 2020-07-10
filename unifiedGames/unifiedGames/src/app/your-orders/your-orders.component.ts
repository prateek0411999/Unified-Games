import { Component, OnInit } from '@angular/core';
import {RegisterUserService} from '../register-user.service';
import {BookingService} from '../booking.service';
import {LoggedInUser} from 'shared/loggedInUser';
import {obj} from 'shared/Obj';
import {Booking} from 'shared/booking';
import {Router} from '@angular/router';
@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.css']
})
export class YourOrdersComponent implements OnInit {

  constructor(private _rus: RegisterUserService,public _book: BookingService,private _route: Router) { }
  user: LoggedInUser;

   items;
    bookingstatus;
  flag;

  details: Booking[];
  ngOnInit(): void {
    this.user=this._rus.lgUser;

    this._book.getOrders(this.user)
    .subscribe((res : Booking[]) => {

       console.log(res);
       
       this.details=res;
      
      
       //this.details=res;
       console.log(this.details);
       this.items=this.details.length - 1;
       console.log(this.details.length);
      console.log(this.details[0].coach[0].email);
    },
    err=>console.log(err));

    


  }

  reject(detail)
  {
    console.log(detail);

    this._book.reject(detail)
    .subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    },err=> console.log(err));
  }
  
  accept(detail){
    this._book.accept(detail)
    .subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    },error=>console.log(error));

  }

}
