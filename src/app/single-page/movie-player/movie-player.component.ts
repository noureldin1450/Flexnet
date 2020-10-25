import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: ['./movie-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MoviePlayerComponent implements OnInit,OnChanges {

  constructor() { }

  @Input() MovieData:any;

  server: number = 1;

  player: boolean = false;

  videoSources: Plyr.Source[] = [];

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const MovieData = changes['MovieData']

    //when we had the data from the api
    if (MovieData.currentValue) {
      console.log('data has loaded');

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
    console.log(q240, q480, q1080);

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
    console.log('push data is Done')
    this.player = true;
    console.log('player is shown')

  }

}
