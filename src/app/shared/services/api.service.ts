import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  APIURL: string = 'https://flexnet-api.netlify.app/';
  HEADERS: string = 'https://flexnet-api.herokuapp.com/';
  FORMAT: string = '/index.json';


  LatestMoviesData() {
    return this.http.get(`${this.HEADERS}${this.APIURL}movies.json`);
  }

  //the genra list 
  GenraData() {
    return this.http.get(`${this.HEADERS}${this.APIURL}tags.json`);
  }

}
