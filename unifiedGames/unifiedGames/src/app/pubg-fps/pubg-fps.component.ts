import { Component, OnInit } from '@angular/core';
import {FpsGuideService} from '../fps-guide.service';


@Component({
  selector: 'app-pubg-fps',
  templateUrl: './pubg-fps.component.html',
  styleUrls: ['./pubg-fps.component.css']
})
export class PubgFpsComponent implements OnInit {

  constructor(private _Fps: FpsGuideService) { }
 
  PubgFps=[]
  ngOnInit(): void {
   // console.log("control is here");
    this._Fps.getPubgFps()
    .subscribe((data)=>{
      this.PubgFps=data;
      console.log(data);
    },
    (err)=> console.log(err)
    )  
  }

 

}
