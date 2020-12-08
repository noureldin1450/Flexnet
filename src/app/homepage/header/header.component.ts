import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  defaultimage:string = 'https://media1.tenor.com/images/94f9fe45ec36d3939e2812a08b6305bd/tenor.gif?itemid=18852957';
  errorimage:string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdata.whicdn.com%2Fimages%2F246393711%2Foriginal.gif&f=1&nofb=1';

  @Input() title?: string = '' || 'Flexnet Top Movies';
  
  @Input() MoviesData: any;

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4.7,
    navigation: true,
    // pagination: false,
    // scrollbar: false,
    // uniqueNavElements: false,
    freeModeMomentumRatio: 1,
    followFinger: true,
    allowTouchMove: true,
    freeMode: true,
    grabCursor: true,
    preventClicks: true,
    spaceBetween: 10,
    // autoplay:{
    //   delay: 3500,
    //   disableOnInteraction: true
    // },
    breakpoints:{
      0:{
        slidesPerView: 1.1
      },
      310:{
        slidesPerView: 1.3
      },
      380:{
        slidesPerView: 1.5
      },
      430:{
        slidesPerView: 1.7
      },
      500:{
        slidesPerView: 2.1
      },
      600:{
        slidesPerView: 2.4
      },
      900:{
        slidesPerView: 2.8
      },
      1000:{
        slidesPerView: 3.4
      },
      1200:{
        slidesPerView: 4.5
      },
      // 1300:{
      //   slidesPerView: 4.3
      // },
      1400:{
        slidesPerView: 4.7
      },
      1500:{
        slidesPerView: 5.2
      },
      1700:{
        slidesPerView: 5.7
      },
      2000:{
        slidesPerView: 6.7
      }
    }
  }

}