import { ApiService } from './../../shared/services/api.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.LatestMoviesData().subscribe(data =>{
      this.MoviesData = data;
    })
  }

  @Input() title?: string = '' || 'Flexnet Top Movies';
  
  MoviesData: any;

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
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
  }

}
