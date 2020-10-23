import { ApiService } from './../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public api:ApiService) { }

  GenraList:any;
  BoxofficeMoviesData:any;

  LatestMovies:any;
  RandomNumber:number = Math.floor((Math.random() * 49) - 1);

  sliders:any = {
   slides:[
     {name: 'action'},
    //  {name: 'funny'},
    //  {name: 'horror'},
     {name: 'romntic'},
   ]
  }

  WindowSize:number = window.innerWidth;

  ngOnInit(): void {
    this.api.BoxofficeMovies(2020).subscribe(data =>{
      this.BoxofficeMoviesData = data;
    });

    this.api.LatestMoviesData().subscribe(data =>{
      this.LatestMovies = data;
    });

    this.api.GenraList().subscribe(data =>{
      this.GenraList = data;
    })
  }


}
