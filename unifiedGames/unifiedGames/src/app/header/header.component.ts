import { Component, OnInit } from '@angular/core';

import {RegisterUserService} from '../register-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _registerUserService: RegisterUserService) { }

  ngOnInit(): void {
  }

}
