import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card.component';
import { SwiperModule, SwiperConfigInterface, SwiperConfig } from 'ngx-swiper-wrapper';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';

const DEFAULT_SWIPER_CONFIG:SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    SmallCardComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    LazyLoadImageModule,
    RouterModule,
    PipesModule
  ],
  exports:[
    SmallCardComponent
  ],
  providers:[{
    provide: SwiperConfig,
    useValue: DEFAULT_SWIPER_CONFIG
  }]

})
export class SmallCardModule { }
