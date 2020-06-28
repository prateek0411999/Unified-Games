import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { forbiddenNameValidator } from 'shared/first-name.validator';
import { PasswordValidator } from 'shared/password.validator';
import {RegisterUserService} from '../register-user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private _registerUser: RegisterUserService,
    private _router: Router) { }

    signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstname: ['',[Validators.required,Validators.minLength(3),forbiddenNameValidator]],
      lastname: ['',[Validators.required,Validators.minLength(3),forbiddenNameValidator]],
      
      email: ['',[Validators.required,
                  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      contactno: ['',[Validators.required,
                  Validators.pattern("^[7-9][0-9]{9}$")]],
      password: [''],
  
      confirmPassword: ['']
  
    },{validators: PasswordValidator});
  
    
  }

  //form group instance that will represent the reactive form

  

  onSubmit()
  {
    console.log("displaying the form value---------------");
    console.log(this.signUpForm.value);
    this._registerUser.register(this.signUpForm.value)
    .subscribe(
      response => console.log('Success!', response),
      error => console.log('!!!!!!error return!!!!!!!!!',error)
    );

    window.alert("You have successfully signed up redirect to login page");
    this._router.navigate(['/login']);
}

}