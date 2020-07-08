import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FpsCoach} from  'shared/FpsCoach';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterFpsCoachesService {

  constructor(private _http: HttpClient) { }

  public flag: boolean;
  private _url="http://localhost:3000/fpscoaching";
  private _url1="http://localhost:3000/checkfps";
  private _url2= "http://localhost:3000/getFpsCoachesByGameName/:id"

 


  registerFpsCoach(Coach)
  {
    return this._http.post<any>(this._url,Coach);


  }

  checkFpsCoachExists(coach1)
   {
     console.log('@@@@@@@@@@@@@@',coach1);
     return this._http.post<any>(this._url1,coach1);

   }


   getFpsCoachesByGameName(id)
   {
  
     return this._http.get<any>(this._url2 + id);

   }


}
