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

  BoxofficeMovies(year:number) {
    return this.http.get(`${this.HEADERS}${this.APIURL}/boxoffices/${year}/index.json`);
  }

  //Movie Data 
  MovieData(Slug:string) {
    return this.http.get(`${this.HEADERS}${this.APIURL}movies/${Slug}/index.json`);
  }

  //the genra list 
  GenraData(genra:string) {
    return this.http.get(`${this.HEADERS}${this.APIURL}tags/${genra}/index.json`);
  }

  //the genra list 
  GenraList() {
    return this.http.get(`${this.HEADERS}${this.APIURL}tags.json`);
  }

  //the slugs for the search
  SlugsData(){
    return this.http.get(`${this.HEADERS}${this.APIURL}slugs.json`);
  }

}
