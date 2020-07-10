import { Component, OnInit } from '@angular/core';
import {RegisterUserService} from '../register-user.service';
import {BookingService} from '../booking.service';
import {LoggedInUser} from 'shared/loggedInUser';

@Component({
  selector: 'app-your-coach',
  templateUrl: './your-coach.component.html',
  styleUrls: ['./your-coach.component.css']
})
export class YourCoachComponent implements OnInit {

  constructor(private _rus: RegisterUserService,private _book: BookingService) { }

  user: LoggedInUser;

  ngOnInit(): void {
    this.user=this._rus.lgUser;

  

  }

}
