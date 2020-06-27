import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  //form group instance that will represent the reactive form

  signUpForm = this.fb.group({
    firstname: ['Prateek'],
    lastname: [''],
    username: [''],
    email: [''],
    password: [''],
    confirmPassword: ['']
  });


}
