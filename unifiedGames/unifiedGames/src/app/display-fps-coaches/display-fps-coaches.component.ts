import { Component, OnInit } from '@angular/core';
import {RegisterFpsCoachesService} from '../register-fps-coaches.service';
import {switchMap }from 'rxjs/operators';
import { Params, ActivatedRoute } from '@angular/router';
import {ID} from 'shared/id';
import {FpsCoach} from 'shared/FpsCoach';

@Component({
  selector: 'app-display-fps-coaches',
  templateUrl: './display-fps-coaches.component.html',
  styleUrls: ['./display-fps-coaches.component.css']
})
export class DisplayFpsCoachesComponent implements OnInit {

  constructor(private _registerFpsCoaches: RegisterFpsCoachesService,private route: ActivatedRoute) { }
  d: ID;
  fpscoach : FpsCoach[];

  ngOnInit(): void {
    

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

}
