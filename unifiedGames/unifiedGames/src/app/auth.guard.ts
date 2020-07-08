import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {RegisterUserService} from './register-user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _registerUserService: RegisterUserService,
    private _router: Router ){}

    canActivate(): boolean{

      if(this._registerUserService.loggedIn())
      {
        return true;

      }
      else{
        this._router.navigate(['/login']);
        return false;
      }

    }
  
  }