import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-randommovie',
  templateUrl: './randommovie.component.html',
  styleUrls: ['./randommovie.component.scss']
})

export class RandommovieComponent implements OnInit,OnChanges {

  @Input() movie:any;

  show:boolean = false;

  constructor() {}

  ngOnInit(): void {}
  
  ngOnChanges(Changes:SimpleChanges){
    if(Changes.movie?.currentValue[0]){
      this.show = true;
    }
  }


}
