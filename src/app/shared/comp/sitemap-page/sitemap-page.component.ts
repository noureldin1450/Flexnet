import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sitemap-page',
  templateUrl: './sitemap-page.component.html',
  styleUrls: ['./sitemap-page.component.scss']
})
export class SitemapPageComponent implements OnInit {

  constructor(private api:ApiService) { }

  SitemapData:any;

  name:string = 'ok';

  ngOnInit(): void {
    this.api.SiteMapData().subscribe(data =>{
      this.SitemapData = data;
      console.log(this.SitemapData)
    })
  }

}
