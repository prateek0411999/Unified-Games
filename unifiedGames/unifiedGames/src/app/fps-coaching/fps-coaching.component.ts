import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from 'shared/loggedInUser';
import {LoginComponent} from '../login/login.component';
import {RegisterUserService} from '../register-user.service';


@Component({
  selector: 'app-fps-coaching',
  templateUrl: './fps-coaching.component.html',
  styleUrls: ['./fps-coaching.component.css']
})
export class FpsCoachingComponent implements OnInit {

  user: LoggedInUser;
  constructor(private _lc: LoginComponent,
    private _ss: RegisterUserService) { }

  ngOnInit(): void {
    console.log('-------!!!!!!!!!!!');
  

    this.user=this._ss.lgUser;
    console.log(this.user);

    }

}

