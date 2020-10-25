import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePageComponent } from './single-page/single-page.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { PipesModule } from '../shared/pipes/pipes.module';
import { MoviePlayerComponent } from './movie-player/movie-player.component';
import { PlyrModule } from 'ngx-plyr';
import { DownloadComponent } from './download/download.component';

const routes:Routes = [
  {
    path: '', 
    component: SinglePageComponent
  }
]


@NgModule({
  declarations: [SinglePageComponent, MovieHeaderComponent, MoviePlayerComponent, DownloadComponent],
  imports: [
    CommonModule,
    PlyrModule,
    PipesModule,
    RouterModule.forChild(routes)  
  ],
  exports:[RouterModule]
})
export class SinglePageModule { }
