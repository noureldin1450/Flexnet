import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { TrailerPipe } from './trailer.pipe';
import { MoviePlayerPipe } from './movie-player.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    TrailerPipe,
    MoviePlayerPipe        
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TruncatePipe,
    TrailerPipe,
    MoviePlayerPipe
  ]
})
export class PipesModule { }
