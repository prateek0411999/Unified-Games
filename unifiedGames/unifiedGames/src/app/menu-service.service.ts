import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(private http: HttpClient) { }
  private _url="http://localhost:3000/menu";
  private _url1="http://localhost:3000/footer";
  
  getMenu()
  {
    console.log('!!!!!@@###!');
    return this.http.get<any>(this._url);
  }

  getFooter(){

    return this.http.get<any>(this._url1);
  }

}
