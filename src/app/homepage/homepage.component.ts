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

  ngOnInit(): void {
    this.api.BoxofficeMovies(2020).subscribe(data =>{
      this.BoxofficeMoviesData = data;
    });

    this.api.GenraList().subscribe(data =>{
      this.GenraList = data;
    })
  }

  GenraList:any;
  BoxofficeMoviesData:any;

  sliders:any = {
   slides:[
     {name: 'action'},
    //  {name: 'funny'},
    //  {name: 'horror'},
     {name: 'romntic'},
   ]
  }

  WindowSize:number = window.innerWidth;



}
