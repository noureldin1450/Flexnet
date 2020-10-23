import { WideCardModule } from '../wide-card/wide-card.module';
import { SmallCardModule } from '../small-card/small-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';



@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    SmallCardModule,
    WideCardModule
  ],
  exports:[
    SliderComponent
  ]
})
export class SliderModule { }
