import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from '../menu-service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _menu: MenuServiceService) { }
  menu =[]
  ngOnInit(): void {

    console.log('__________________---------');
    this._menu.getFooter()
    .subscribe((data)=> {
      this.menu = data;
      console.log(data);
    },
    

    (err)=> console.log('Yha p hh '+ err)

    )
  }


  
}
