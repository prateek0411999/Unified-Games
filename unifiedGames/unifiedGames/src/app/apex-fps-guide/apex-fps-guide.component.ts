import { Component, OnInit } from '@angular/core';
import {FpsGuideService} from '../fps-guide.service';

@Component({
  selector: 'app-apex-fps-guide',
  templateUrl: './apex-fps-guide.component.html',
  styleUrls: ['./apex-fps-guide.component.css']
})
export class ApexFpsGuideComponent implements OnInit {

  constructor(private _Fps: FpsGuideService) { }

  ApexFps=[]
  ngOnInit(): void {
   // console.log("control is here");
    this._Fps.getApexFps()
    .subscribe((data)=>{
      this.ApexFps=data;
      console.log(data);
    },
    (err)=> console.log(err)
    )  
  }

 

}
