import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genra-list',
  templateUrl: './genra-list.component.html',
  styleUrls: ['./genra-list.component.scss']
})
export class GenraListComponent implements OnInit{

  constructor(private api:ApiService) {}

  genralist:any;

  ngOnInit(): void {
    this.api.GenraList().subscribe(data =>{
      this.genralist = data;
    });
  }

}
