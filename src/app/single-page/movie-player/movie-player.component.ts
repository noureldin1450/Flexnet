import { HttpClient } from '@angular/common/http';
import { CommentStmt } from '@angular/compiler';
import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: ['./movie-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MoviePlayerComponent implements OnInit,OnChanges {

  constructor(private http:HttpClient) { }

  @Input() MovieData:any;

  activeServer:any;
  player: boolean = false;
  videoSources: Plyr.Source[] = [];
  vikv:boolean;

  ngOnInit(): void {this.serverCheck()}


  //checking for if the movie do exist on vikv or not
  UrlCheck(url:string){
    console.log('am checking on', url)
    this.http.get(url, {observe: 'response'}).subscribe(val =>{},
      (val =>{
        if(val.status == 200){
          console.log('i found the movie at vikv am adding it...');
          this.vikv = true;
        }else{
          console.log('Vikv dont have the movie');
          this.vikv = false;
        }
    }));
  }

  serverCheck(){
    console.log('am checking for vikv source and assigning the server...');
    this.UrlCheck(`https://hls.hdv.fun/imdb/${this.MovieData.imdbid}`);
    if(this.MovieData.fushaarid != null || undefined || ''){
      this.activeServer = 'fushaarserver';
    }else if(this.vikv == true){ 
      this.activeServer = 'vikvserver';
    }
    console.log('Done.');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    const MovieData = changes['MovieData']

    //when we had the data from the api
    if (MovieData.currentValue) {
      console.log('Movie resources are here...');
      //restarting the player
      console.log('Player Is Off');
      this.player = false;
      
      console.log('Genrating the data...');
      let fushaarid = this.MovieData.fushaarid;
      let fushaarapi = 'https://bg.stream.fushaar.com/movie/';
      let googleapi = 'https://storage.googleapis.com/neon-reporter-274200.appspot.com/fushaar/media/';
      let ext = '.mp4';

      let fushaarapi240 = `${fushaarapi}${fushaarid}/${fushaarid}-240p${ext}`;
      let fushaarapi480 = `${fushaarapi}${fushaarid}/${fushaarid}-480p${ext}`;
      let fushaarapi1080 = `${fushaarapi}${fushaarid}/${fushaarid}${ext}`;
      this.pushdata(fushaarapi240, fushaarapi480, fushaarapi1080);
    }
  }

  pushdata(q240?: string, q480?: string, q1080?: string) {

    console.log('Removing The Old Src');
    this.videoSources = [];
    //making the server the premium server
    this.serverCheck();
    
    console.log('Pushing The New Data...', q240,q480,q1080);
    if (typeof q240 !== 'undefined') {
      this.videoSources.push(
        {
          src: `${q240}`,
          type: 'video/mp4',
          size: 240
        });
    }
    if (typeof q480 !== 'undefined') {
      this.videoSources.push(
        {
          src: `${q480}`,
          type: 'video/mp4',
          size: 480
        });
    }
    if (typeof q1080 !== 'undefined') {
      this.videoSources.push(
        {
          src: `${q1080}`,
          type: 'video/mp4',
          size: 1080
        });
    }
    console.log('Data Is Pushed')
    this.player = true;
    console.log('Player Is Back On');
  }

}
