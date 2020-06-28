import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private _http: HttpClient) {  }

  private _url2="http://localhost:3000/signup";
  private _url3="http://localhost:3000/login";
  
  register(user)
  {
    console.log("call hua register ");
    console.log(user);
    return this._http.post<any>(this._url2, user);


  }

  loginUser(luser){
    return this._http.post<any>(this._url3,luser);

  }

}
