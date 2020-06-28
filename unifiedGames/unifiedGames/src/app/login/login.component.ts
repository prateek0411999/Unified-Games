import { Component, OnInit } from '@angular/core';
import {RegisterUserService} from '../register-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag=false;

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
      res=> { 
      console.log('Success!!!!!!!',res); 
      localStorage.setItem('token',res.token);
      window.alert("redirect to home page"); 
      this._router.navigate(['/Menu']);

    },
      err=> {window.alert("Pleas enter valid credentials");
      this._router.navigate(['/login'])}
    )
  }
}
