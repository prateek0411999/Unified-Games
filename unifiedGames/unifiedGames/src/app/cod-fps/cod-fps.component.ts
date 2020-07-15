import { Component, OnInit } from '@angular/core';
import {FpsGuideService} from '../fps-guide.service';

@Component({
  selector: 'app-cod-fps',
  templateUrl: './cod-fps.component.html',
  styleUrls: ['./cod-fps.component.css']
})
export class CodFpsComponent implements OnInit {

  constructor(private _Fps: FpsGuideService) { }
 
  CodFps=[]
  ngOnInit(): void {
   // console.log("control is here");
    this._Fps.getCodFps()
    .subscribe((data)=>{
      this.CodFps=data;
      console.log(data);
    },
    (err)=> console.log(err)
    )  
  }

 

}
