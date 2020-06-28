import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegisterUserService} from '../register-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _registerUserService: RegisterUserService) { }

  ngOnInit(): void {
  }

}
