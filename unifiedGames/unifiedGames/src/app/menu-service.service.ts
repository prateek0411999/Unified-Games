import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(private http: HttpClient) { }
  private _url="http://localhost:3000/menu";
  
  getMenu()
  {
    return this.http.get<any>(this._url);
  }

}
