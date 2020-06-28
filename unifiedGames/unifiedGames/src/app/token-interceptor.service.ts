import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {RegisterUserService} from './register-user.service';


//now to verify the token we need to send the token from the browser to the server 
//and for that we need http interceptor

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) { }

  intercept(req,next){
  //this is how you need to inject for this case
    let registeruser=this._injector.get(RegisterUserService);
    
    //lets make clone of the req
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization: `Bearer ${registeruser.getToken()}`
      }
    }) 
    return next.handle(tokenizedReq);
  }
}
