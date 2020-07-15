import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FpsGuideService {

  constructor(private _http: HttpClient) { }
  private _Url1="http://localhost:3000/ApexFps";
  private _url2="http://localhost:3000/CodFps";
  private _url3="http://localhost:3000/CsgoFps";
  private _url4="http://localhost:3000/PubgFps";

  getApexFps()
  {
    console.log('method called ');
    return this._http.get<any>(this._Url1);

  }

  getCodFps()
  {
    return this._http.get<any>(this._url2);
  }
  
  getCsgoFps()
  {
    return this._http.get<any>(this._url3);
  }

  getPubgFps()
  {
    return this._http.get<any>(this._url4);
  }

}
