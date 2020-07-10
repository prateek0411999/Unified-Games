import { Component, OnInit } from '@angular/core';
import {RegisterUserService} from '../register-user.service';
import {BookingService} from '../booking.service';
import {LoggedInUser} from 'shared/loggedInUser';
import {Booking} from 'shared/booking';
@Component({
  selector: 'app-your-coach',
  templateUrl: './your-coach.component.html',
  styleUrls: ['./your-coach.component.css']
})
export class YourCoachComponent implements OnInit {

  constructor(private _rus: RegisterUserService,private _book: BookingService) { }

  user: LoggedInUser;

  details: Booking[];

  ngOnInit(): void {
    this.user=this._rus.lgUser;
    this._book.userOrders(this.user)
    .subscribe((res: Booking[])=>{
      console.log(res);
      this.details=res;
      
    },err=>{console.log(err)})

  

  }

}
