import { SeoService } from './../shared/services/seo.service';
import { ApiService } from './../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit{

  GenraMovies:any;
  genra:string; 
  
  constructor(private route:ActivatedRoute, private api:ApiService, private SEO:SeoService) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>{

      console.log('Getting the tag name...')
      this.genra = this.route.snapshot.params.tag;

      console.log('Req the new data...');
      this.GenraMovies = null;
      this.api.GenraData(this.genra).subscribe(data =>{
        this.GenraMovies = data;
      });
      console.log('Done new data has been pushed.');

      console.log('Updating the seo meta data...');
      this.SEO.SEO(`${this.genra} Movies`,'','');
    })

  }
}
