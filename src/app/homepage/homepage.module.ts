import { SliderModule } from './../shared/comp/slider/slider.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';
import { HeaderModule } from './header/header.module';
import { SearchComponent } from '../shared/comp/search/search.component';
import { FormsModule } from '@angular/forms';
import { WideCardModule } from '../shared/comp/wide-card/wide-card.module';
import { SmallCardModule } from '../shared/comp/small-card/small-card.module';
import { RandommovieModule } from '../shared/comp/randommovie/randommovie.module';

const routes: Routes = [
  {path: '', component: HomepageComponent},
]

@NgModule({
  declarations: [
    HomepageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SmallCardModule,
    HeaderModule,
    RandommovieModule,
    SliderModule,
    WideCardModule,
    RouterModule.forChild(routes)
  ]
})
export class HomepageModule { }
