import { SeoService } from './../../shared/services/seo.service';
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
  Slug:string; 
  
  constructor(private api:ApiService, private route:ActivatedRoute, private SEO:SeoService) { }

  ngOnInit(): void {

    //with every change in the url the data will reload and get the right data 
    this.route.paramMap.subscribe(params =>{
      console.log('Changing in the URL detcted...');
      
      console.log('Getting the new slug');
      this.Slug = this.route.snapshot.params.slug;
      
      //the main movie slug
      console.log('Am Getting Movie Data...');
      this.api.MovieData(this.Slug).subscribe(data =>{
        this.MovieData = data;
        
        //adding the seo after the data has been loaded.      
        this.SEO.SEO(this.MovieData.title, (`${this.MovieData.title} ${this.MovieData.story}`), this.MovieData.moviecover);
        console.log(data)
      });

      console.log('Done data has loaded.');
    })

  }

}
