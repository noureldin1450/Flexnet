import { ApiService } from './../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public api: ApiService) { }

  loadmore: boolean = false;

  GenraList: any;
  BoxofficeMoviesData: any;

  LatestMovies: any;
  RandomeNumbers: any = [];

  GenrateRandomNumbers() {
    // this.RandomeNumbers.push(Math.floor((Math.random() * 49) - 1));
    this.RandomeNumbers.push(Math.floor((Math.random() * 50)));
    console.log(this.RandomeNumbers)
  }

  sliders: any = {
    slides: [
      { name: 'action' },
      //  {name: 'funny'},
      //  {name: 'horror'},
      { name: 'romntic' },
    ]
  }

  WindowSize: number = window.innerWidth;

  ngOnInit(): void {
    this.api.BoxofficeMovies(2020).subscribe(data => {
      this.BoxofficeMoviesData = data;
    });

    this.api.LatestMoviesData().subscribe(data => {
      this.LatestMovies = data;
    });

    this.api.GenraList().subscribe(data => {
      this.GenraList = data;
    })

    this.GenrateRandomNumbers()
    this.GenrateRandomNumbers()
    this.GenrateRandomNumbers()
    this.GenrateRandomNumbers()
    this.GenrateRandomNumbers()
  }


}
