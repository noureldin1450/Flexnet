import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page.component';
import { Routes, RouterModule } from '@angular/router';
import { SmallCardModule } from './../shared/comp/small-card/small-card.module';

const routes:Routes = [
  {
    path:'', 
    component: ListPageComponent
  },
  {
    path: ':tag',
    component: ListPageComponent
  }
]


@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    SmallCardModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ListPageModule { }
