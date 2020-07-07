import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterFpsCoachesService {

  constructor(private _http: HttpClient) { }

  public flag: boolean;
  private _url="http://localhost:3000/fpscoaching";
  private _url1="http://localhost:3000/checkfps";

  registerFpsCoach(Coach)
  {
    return this._http.post<any>(this._url,Coach);


  }

  checkFpsCoachExists(coach1)
   {
     console.log('@@@@@@@@@@@@@@',coach1);
     return this._http.post<any>(this._url1,coach1);

   }

}
