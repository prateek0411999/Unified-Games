import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private _http: HttpClient) {  }
  private _url='http://localhost:3000/signup';

  register(user)
  {
    console.log("call hua register ");
    console.log(user);
    return this._http.post<any>(this._url,user);


  }
}
