import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SwiperModule, SwiperConfigInterface, SwiperConfig } from 'ngx-swiper-wrapper';



const DEFAULT_SWIPER_CONFIG:SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports:[
    HeaderComponent
  ],
  providers:[{
    provide: SwiperConfig,
    useValue: DEFAULT_SWIPER_CONFIG
  }]
})
export class HeaderModule { }
