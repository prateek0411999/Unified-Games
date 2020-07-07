import { Component, OnInit } from '@angular/core';
import {RegisterUserService} from '../register-user.service';
import {Router} from '@angular/router';
import {LoggedInUser} from 'shared/loggedInUser';
import { EventEmitter } from 'protractor';
import {HeaderComponent} from '../../../src/app/header/header.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag=false;
 loggedInUser: LoggedInUser;
  
  constructor(private _router: Router,
    private _login: RegisterUserService,
    private _hc: HeaderComponent) { }

  ngOnInit(): void {
  }

  loginUserData={email: '',password: ''}

  loginUser()
  {
    console.log(' logging in user data ');
    console.log(this.loginUserData);
    this._login.loginUser(this.loginUserData)
    .subscribe(
      res=> { 
      console.log('Success!!!!!!!',res); 

      localStorage.setItem('token',res.token);
      
      this._router.navigate(['/Menu']);

      this.loggedInUser=res.user1;
      this._login.emmit(this.loggedInUser);

      console.log(this.loggedInUser);
      console.log(this.loggedInUser.firstname)
      //this._hc.afterLogin();

    },
      err=> {window.alert("Please enter valid credentials");
      this._router.navigate(['/login'])}
    )
  }

 


}

export interface LoggedInUserEmail{
  email: string;
}