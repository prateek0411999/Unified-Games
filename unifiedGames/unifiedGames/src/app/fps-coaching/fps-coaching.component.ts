import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from 'shared/loggedInUser';
import {LoginComponent} from '../login/login.component';
import {RegisterUserService} from '../register-user.service';
import {Router}from '@angular/router';
import {environment} from 'shared/environment';

import {FormBuilder} from '@angular/forms';
import {RegisterFpsCoachesService} from '../register-fps-coaches.service';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-fps-coaching',
  templateUrl: './fps-coaching.component.html',
  styleUrls: ['./fps-coaching.component.css']
})
export class FpsCoachingComponent implements OnInit {

  env :environment;
  user: LoggedInUser;
  fpsCoach: FormGroup;

  constructor(private _lc: LoginComponent,
    private _ss: RegisterUserService,
    private fb: FormBuilder,
    private _route: Router,
    private _registerFps: RegisterFpsCoachesService) { }


  ngOnInit(): void {
    console.log('-------!!!!!!!!!!!');
  

    this.user=this._ss.lgUser;
    console.log(this.user);

    this.fpsCoach = this.fb.group({
      firstname: [this.user.firstname,[Validators.required,Validators.minLength(3)]],
      lastname: [this.user.lastname,[Validators.required,Validators.minLength(3)]],
      
      email: [this.user.email,[Validators.required,
                  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      contactno: [this.user.contactno,[Validators.required,
                  Validators.pattern("^[7-9][0-9]{9}$")]],
        
      selectedgame: ['',Validators.required],
      hoursingame: ['',[Validators.required,Validators.maxLength(1)]],
      experience: ['',[Validators.required,Validators.maxLength(2)]],
      available: ['',Validators.required],
      perhourcharge: ['',Validators.required],
      image: ['',Validators.required],
      timings: ['',Validators.required]


    });

    }

    onFileSelect(event){
      const file= event.target.files[0];
      console.log(file);

    }
    
    
    onSubmit()
    {
      console.log(this.fpsCoach.value);
      this._registerFps.registerFpsCoach(this.fpsCoach.value)
      .subscribe(
        response => {console.log('Success!', response);
        this._registerFps.flag=true;
        this._route.navigate(['/Menu']);


      },
        error => console.log('!!!!!!error return!!!!!!!!!',error)
      );
    }

}

