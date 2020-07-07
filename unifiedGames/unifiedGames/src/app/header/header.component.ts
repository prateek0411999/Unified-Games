import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from 'shared/loggedInUser';
import {LoginComponent} from '../login/login.component';

import {RegisterUserService} from '../register-user.service';
import {RegisterFpsCoachesService} from '../register-fps-coaches.service';

import {environment} from 'shared/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _registerUserService: RegisterUserService,
    public _fps: RegisterFpsCoachesService
    ) { }

  user: LoggedInUser;
 
  flagg: Boolean;
  nowRun: Boolean;
  env = environment;

  ngOnInit(): void {
    
    // this._registerUserService.checkFps()
    // .subscribe( (res)=>{
    //   this.flagg=res;
    // }, err=> console.log(err));

  }

  // afterLogin(){
  //   this.nowRun=true;
    
  //   this.user=this._registerUserService.lgUser;
  //   console.log('!!!!!!!!+++++ ');
  //   console.log(this.user.email);
  //   this._fps.checkFpsCoachExists(this.user)
  //   .subscribe( (res)=> {
  //      this.flagg=res;
  //     console.log('-------++++++----------',res);
  //   },
  //      err=> console.log(err));

      
  // }


}
