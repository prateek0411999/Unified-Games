import { Component, OnInit } from '@angular/core';
import {RegisterUserService} from '../register-user.service';
import {BookingService} from '../booking.service';
import {LoggedInUser} from 'shared/loggedInUser';
import {obj} from 'shared/Obj';
import {Booking} from 'shared/booking';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.css']
})
export class YourOrdersComponent implements OnInit {

  constructor(private _rus: RegisterUserService,private _book: BookingService) { }
  user: LoggedInUser;

   items;

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

  Reject(details)
  {
    this._book.Reject(details.user[0])
    .subscribe((res)=>{
      console.log(res)
    },err=> console.log(err));
  }
  

}
