import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  Slugs:any;
  path:string = "/movies/";
  moviename:string;
  url:string;

  constructor(private api:ApiService, private router:Router) {}

  ngOnInit(): void {
    this.api.SlugsData().subscribe(data =>{
      this.Slugs = data;
    })
  }

  search(){
    if(this.moviename == '' || this.moviename == undefined){
      alert('You need to type your movie name first to search \n اكتب اسم الفيلم الذي تبحث عنه اولا')
    }
    this.moviename = this.moviename.replace(/\s/g, '-');
    this.moviename = this.moviename.toLowerCase();
    this.url = this.path+this.moviename;
    // this.location = this.url;
    this.router.navigateByUrl(this.url);
  }

}
