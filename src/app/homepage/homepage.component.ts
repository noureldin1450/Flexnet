import { ApiService } from './../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private api:ApiService) { }

  BoxofficeMoviesData:any;

  ngOnInit(): void {
    this.api.BoxofficeMovies(2020).subscribe(data =>{
      this.BoxofficeMoviesData = data;
    })
  }

}
