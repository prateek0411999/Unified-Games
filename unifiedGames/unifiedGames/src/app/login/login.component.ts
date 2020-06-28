import { Component, OnInit } from '@angular/core';
import {RegisterUserService} from '../register-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,
    private _login: RegisterUserService) { }

  ngOnInit(): void {
  }

  loginUserData={email: '',password: ''}

  loginUser()
  {
    console.log(' logging in user data ');
    console.log(this.loginUserData);
    this._login.loginUser(this.loginUserData)
    .subscribe(
      res=> { console.log('Success!!!!!!!',res); window.alert("redirect to home page"); this._router.navigate(['/Menu']);},
      err=> console.log(err)
    )
  }
}
