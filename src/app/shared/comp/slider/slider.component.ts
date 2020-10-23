import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  
  WindowSize:number = window.innerWidth;

  constructor() { }

  ngOnInit(): void {
  }

}
