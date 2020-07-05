import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterFpsCoachesService {

  constructor(private _http: HttpClient) { }

  private _url="http://localhost:3000/fpscoaching";

  registerFpsCoach(Coach)
  {
    return this._http.post<any>(this._url,Coach);


  }
  
}
