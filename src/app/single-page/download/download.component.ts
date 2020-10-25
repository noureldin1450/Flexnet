import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  @Input() MovieData: any;

  fushaarapi240: string;
  fushaarapi480: string;
  fushaarapi1080: string;

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

      this.fushaarapi240 = `${fushaarapi}${fushaarid}/${fushaarid}-240p${ext}`;
      this.fushaarapi480 = `${fushaarapi}${fushaarid}/${fushaarid}-480p${ext}`;
      this.fushaarapi1080 = `${fushaarapi}${fushaarid}/${fushaarid}${ext}`;

    }
  }



  warning: string = '';

  download() {
    alert(this.warning);
    console.log('shit')
  }

  ngOnInit(): void {}

}
