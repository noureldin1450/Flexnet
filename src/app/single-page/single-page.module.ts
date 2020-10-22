import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePageComponent } from './single-page/single-page.component';

const routes:Routes = [
  {path: '', component: SinglePageComponent}
]


@NgModule({
  declarations: [SinglePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ]
})
export class SinglePageModule { }
