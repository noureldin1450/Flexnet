import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieHeaderComponent implements OnInit {

  @Input() MovieData:any;

  constructor() { }

  ngOnInit(): void {
  }

}
