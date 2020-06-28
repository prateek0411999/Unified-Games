import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from '../menu-service.service';
import {Menu} from '../shared/menu';
import { HttpErrorResponse } from '@angular/common/http';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _menu: MenuServiceService,
    private _route: Router) { }

//  menudata: Menu;
  menu =[]
  ngOnInit(): void {
    this._menu.getMenu()
    .subscribe(
      (data)=> {
      this.menu = data;
      console.log(data);
    },
    

    (err)=> {
      if(err instanceof HttpErrorResponse){
        if(err.status === 401)
        {
          this._route.navigate(['/login']);

        }
      }
    }

    )
  }


  
}
