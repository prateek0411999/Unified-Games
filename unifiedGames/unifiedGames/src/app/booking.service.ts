import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _http: HttpClient) { }

  private _url ="http://localhost:3000/book";
  private _url1="http://localhost:3000/getorders";
  private _url2="http://localhost:3000/rejected";
  private _url3="http://localhost:3000/accepted";

  book(data)
  {
    return this._http.post<any>(this._url,data);

  }

  getOrders(usr)
  {
    return this._http.post(this._url1,usr);
    
  }

  Reject(data)
  {
    return this._http.post<any>(this._url2,data);

  }
  Accept(dd)
  {
    return this._http.post<any>(this._url3,dd);
  }

}
