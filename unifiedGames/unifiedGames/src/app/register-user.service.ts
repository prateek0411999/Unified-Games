import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoggedInUser} from 'shared/loggedInUser';
import {LogUserData} from 'shared/logUserData';
@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  lgUser: LoggedInUser;
  ll: LogUserData;


  constructor(private _http: HttpClient,
    private _route: Router) {  }

  private _url2="http://localhost:3000/signup";
  private _url3="http://localhost:3000/login";
  //private _url1="http://localhost:3000/checkFps";

  register(user)
  {
    console.log("call hua register ");
    console.log(user);
    return this._http.post<any>(this._url2, user);


  }

  
  loginUser(luser){
    this.ll=luser;
    return this._http.post<any>(this._url3,luser);

  }
  emmit(loggedInUser){
    this.lgUser=loggedInUser;

  }

  // checkFps()
  // {
  //   console.log('control moves here');
  //   console.log(this.ll.email);
  //   return (this._http.post<any>(this._url1,this.ll));

  // }

  loggedIn()
  {
    
    return !!localStorage.getItem('token');
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  logoutUser()
  {
    localStorage.removeItem('token');
    this._route.navigate(['/login']);
  }

}
