import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'moviePlayer'
})
export class MoviePlayerPipe implements PipeTransform {

  constructor(private Sanitizer:DomSanitizer){}

  transform(value: string, player: string):any {

    if(player === 'imdb'){
      return this.Sanitizer.bypassSecurityTrustHtml(`
      <iframe src="https://1movietv.com/playstream/${value}" scrolling="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="animated fadeIn" width="560" height="500"></iframe>`);
    }else{
      return this.Sanitizer.bypassSecurityTrustHtml(`
      <iframe src="${value}" scrolling="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="animated fadeIn" width="560" height="500"></iframe>`);
    }
  }

}
