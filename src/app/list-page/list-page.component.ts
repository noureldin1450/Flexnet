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
  genra:string = this.route.snapshot.params.tag;
  
  constructor(private route:ActivatedRoute, private api:ApiService) {    
    this.api.GenraData(this.genra).subscribe(data =>{
      this.GenraMovies = data;
    })
  }

  ngOnInit(): void {
  }
}
