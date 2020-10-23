import { ApiService } from './../../services/api.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-wide-card',
  templateUrl: './wide-card.component.html',
  styleUrls: ['./wide-card.component.scss']
})
export class WideCardComponent implements OnInit,OnChanges {

  constructor(private api:ApiService) {}
  
  defaultimage: string = 'https://media1.tenor.com/images/94f9fe45ec36d3939e2812a08b6305bd/tenor.gif?itemid=18852957';
  errorimage: string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdata.whicdn.com%2Fimages%2F246393711%2Foriginal.gif&f=1&nofb=1';

  @Input() title?: string = '' || 'Flexnet Top Movies';
  @Input() amount?:number;

  @Input() MoviesData?: any;
  @Input() MoviesGenra?: string;

  ngOnInit(): void {}
  ngOnChanges(Changes: SimpleChanges){
    if(this.MoviesGenra != undefined && this.MoviesData == undefined){
      this.MoviesGenra = Changes.MoviesGenra.currentValue;

      this.api.GenraData(this.MoviesGenra).subscribe(data =>{
        this.MoviesData = data;
      })
    }
  }

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 3,
    navigation: false,
    pagination: false,
    scrollbar: false,
    uniqueNavElements: false,
    freeModeMomentumRatio: 1,
    followFinger: true,
    allowTouchMove: true,
    freeMode: true,
    lazy: true,
    grabCursor: true,
    spaceBetween: 10,
    // autoplay:{
    //   delay: 3500,
    //   disableOnInteraction: true
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.1
      },
      310: {
        slidesPerView: 1.1
      },
      500: {
        slidesPerView: 1.2
      },
      600: {
        slidesPerView: 1.4
      },
      1000: {
        slidesPerView: 2.1
      },
      1400: {
        slidesPerView: 2.3
      },
      1700: {
       slidesPerView: 2.6
      },
      2000: {
        slidesPerView: 3.1
      }
    }
  }

}
