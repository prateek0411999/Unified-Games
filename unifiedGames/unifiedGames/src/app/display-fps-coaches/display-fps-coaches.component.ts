import { Component, OnInit } from '@angular/core';
import {RegisterFpsCoachesService} from '../register-fps-coaches.service';
import {switchMap }from 'rxjs/operators';
import { Params, ActivatedRoute } from '@angular/router';
import {ID} from 'shared/id';
import {FpsCoach} from 'shared/FpsCoach';
import {LoggedInUser} from 'shared/loggedInUser';
import {RegisterUserService} from '../register-user.service';
import {Booking} from 'shared/booking';
import {BookingService} from '../booking.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-fps-coaches',
  templateUrl: './display-fps-coaches.component.html',
  styleUrls: ['./display-fps-coaches.component.css']
})
export class DisplayFpsCoachesComponent implements OnInit {

  constructor(private _registerFpsCoaches: RegisterFpsCoachesService,private route: ActivatedRoute,
    private _registeruser: RegisterUserService,private _book: BookingService,private _route: Router) { }
  d: ID;
  fpscoach : FpsCoach[];
  user: LoggedInUser;
  enteredDate: Date;
  date1: String;
  curday;
  today =new Date();

  ngOnInit(): void {
    //getting the logged in user data 
    this.user=this._registeruser.lgUser;
    console.log(this.user);
   this.curday = function(sp){
       
      var dd = this.today.getDate();
      var mm = this.today.getMonth()+1; //As January is 0.
      var yyyy = this.today.getFullYear();
      
      if(dd<10) dd='0'+dd;
      if(mm<10) mm='0'+mm;
      return (yyyy+sp+mm+sp+dd);
      };
      //console.log(this.curday('/'));
      this.date1=this.curday('-');
      console.log(this.date1)
    //using snapshot
    let id= this.route.snapshot.paramMap.get('id');
    console.log('||||||| ',id);
    

    
    this._registerFpsCoaches.getFpsCoachesByGameName(id)
    .subscribe((data)=>{
      console.log('||||||///////||||||||',data);
       this.fpscoach=data;
       console.log(this.fpscoach);
 }, err=> {
      console.log('{{{{{{{{{{{}}}}}}}}}}}');
      console.log(err);
    });

   
  }

  
  
  
  book(aa)
  {
    console.log('its called');
    console.log(this.enteredDate)
    console.log(aa);

    let book=new Booking(aa.email,this.user.email,this.enteredDate.toString(),"null");
    console.log(book);

    this._book.book(book)
    .subscribe((res)=> {console.log('&&',res)
      window.alert('Success!! You will be notified as soon as your coach accepts');
      this._route.navigate(['/Menu']);
    }, err=> console.log('^^',err));


    

  }

}
