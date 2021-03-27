import { LoaderModule } from './../loader/loader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandommovieComponent } from './randommovie.component';
import { PipesModule } from './../../pipes/pipes.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RandommovieComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    LazyLoadImageModule,
    LoaderModule
  ],
  exports:[
    RandommovieComponent
  ]
})
export class RandommovieModule { }
