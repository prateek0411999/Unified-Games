import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FpsGuideService {

  constructor(private _http: HttpClient) { }
  private _Url1="http://localhost:3000/ApexFps";

  getApexFps()
  {
    console.log('method called ');
    return this._http.get<any>(this._Url1);

  }

}
