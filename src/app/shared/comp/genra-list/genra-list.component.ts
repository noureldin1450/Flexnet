import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genra-list',
  templateUrl: './genra-list.component.html',
  styleUrls: ['./genra-list.component.scss']
})
export class GenraListComponent implements OnInit{

  constructor(private api:ApiService, public router:Router) {}

  genralist:any;

  ngOnInit(): void {
    this.api.GenraList().subscribe(data =>{
      this.genralist = data;
    });
  }

}
