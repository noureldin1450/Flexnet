import { GenraListComponent } from './genra-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';


@NgModule({
  declarations: [GenraListComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgScrollbarModule.withConfig({
      track: 'horizontal',
    })
  ],
  exports:[
    GenraListComponent
  ]
})
export class GenraListModule { }
