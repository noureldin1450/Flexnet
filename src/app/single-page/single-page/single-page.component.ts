import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../shared/services/api.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {

  
  MovieData:any;
  Slug:string = this.route.snapshot.params.slug; 
  
  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    //the main movie slug
    this.api.MovieData(this.Slug).subscribe(data =>{
      this.MovieData = data;
      console.log(data)
    })
  }

}
