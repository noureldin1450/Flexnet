import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UrlHandlingStrategy } from '@angular/router';

@Pipe({
  name: 'trailer'
})


export class TrailerPipe implements PipeTransform {


  constructor(private Sanitizer:DomSanitizer){}

  transform(URL: string):any {
    return this.Sanitizer.bypassSecurityTrustHtml(`
     <iframe src="${URL}"" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope picture-in-picture"
        allowfullscreen>
      </iframe>
    `)
  }

}
