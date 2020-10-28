import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  DefaultTitle: string = 'Flexnet - watch free cinema movies online. flexnet free new movies online';
  DefautDis: string = 'Flexnet - Free online new movies. watch free flexnet cinema movies online watch and download movies';
  DefaultKeywords: string = 'flexnet movies,movies flex.net,flexnet free movies,flexnet movie,movie flex.net,films,watch movies,flexnet,flexnet.ga,موقع افلام عربية حديثة اون لاين ,موقع افلام بدون تحميل,مواقع افلام مترجمة اون لاين,افضل مواقع افلام الاكشن,احسن موقع افلام,افضل مواقع لمشاهدة الافلام اون لاين افضل,موقع للأفلام,احدث مواقع الافلام,new movies,flexnet,movies to watch,movies to watch with friends,free movies cinema,free movies cinema cinema movies stream,watch free cinema movies streaming';

  constructor(private SeoTitle: Title, private SeoMeta: Meta) { }

  SEO(title?: string, description?: string, poster?: string) {
    console.log('proparing data for SEO...');
    this.AddingTitle(title);
    this.AddingDescription(description, poster);
    console.log('SEO is Done.');
  }

  AddingTitle(title?: string) {
    if (title) {
      return (
        //adding the title for the page
        this.SeoTitle.setTitle(title + " Watch Now For Free At Flexnet - Flexnet"),
        //adding the Og:title for the page
        this.SeoMeta.addTags([
          { name: 'og:title', content: title || this.DefaultTitle }
        ])
      ),
        console.log(title, ' Added the new title');
    }else {
      return (
        //adding the title for the page
        this.SeoTitle.setTitle(this.DefaultTitle),
        //adding the Og:title for the page
        this.SeoMeta.addTags([
          { name: 'og:title', content: title || this.DefaultTitle }
        ])
      ),
      console.log('Added The Default Title');
    }
  }

  AddingDescription(description?: string, poster?: string) {
    return this.SeoMeta.addTags([
      { name: 'description', content: description || this.DefautDis },
      { name: 'og:description', content: description || this.DefautDis },
      { name: 'keywords', content: this.DefaultKeywords },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'Flexnet.ga' },
      { name: 'application-name', content: 'Flexnet' },
      { name: 'og:image', content: poster || 'https://flexnet.ga/assets/logo.png' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: 'f95959' },
      { name: 'msapplication-navbutton-color', content: 'f95959' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'google-site-verification', content: '9MmS6V6YaKuaxUL2Cbxrf1UgIPJ50TbM8_gidwrrLMg' },
      { charset: 'UTF-8' }
    ]),
      console.log('Added the new poster and description');
  }


}
