import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _http: HttpClient) { }

  private _url ="http://localhost:3000/book";

  book(data)
  {
    return this._http.post<any>(this._url,data);

  }
  
}
