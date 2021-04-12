import { Component, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieHeaderComponent implements OnChanges{

  @Input() MovieData:any;
  
  Trailer:string;

  constructor() { }

  ngOnChanges(Changes: SimpleChanges){
    this.Trailer = `https://www.youtube.com/embed/${Changes.MovieData.currentValue?.trailer}`;
    console.log('Done making the trailer with the Id of', this.Trailer);
  }

}

