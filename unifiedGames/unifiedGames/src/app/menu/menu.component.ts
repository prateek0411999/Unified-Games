import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from '../menu-service.service';
import {Menu} from '../shared/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _menu: MenuServiceService) { }

//  menudata: Menu;
  menu =[]
  ngOnInit(): void {
    this._menu.getMenu()
    .subscribe((data)=> {
      this.menu = data;
      console.log(data);
    },
    

    (err)=> console.log('Yha p hh '+ err)

    )
  }


  
}
