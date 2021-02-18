import { SeoService } from './../shared/services/seo.service';
import { ApiService } from './../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public api: ApiService, private Seo:SeoService) { }

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
  
  //hard coded so the sliders apper in a poster view not a wallpaper view aka wide card
  WindowSize: number = 400;
  // WindowSize: number = window.innerWidth;

  ngOnInit(): void {
    
    this.Seo.SEO();

    console.log('Getting Genralist Data...');
    this.api.GenraList().subscribe(data => {
      this.GenraList = data;
    })

    console.log('Getting Boxoffice Movies Data...');
    this.api.BoxofficeMovies(2020).subscribe(data => {
      this.BoxofficeMoviesData = data;
    });
    
    console.log('Getting Latest Movies Data...');
    this.api.LatestMoviesData().subscribe(data => {
      this.LatestMovies = data;
    });

    this.GenrateRandomNumbers()
    this.GenrateRandomNumbers()
    this.GenrateRandomNumbers()
    this.GenrateRandomNumbers()
    this.GenrateRandomNumbers()
  }


}
