import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';
import { HeaderModule } from './header/header.module';

const routes: Routes = [
  {path: '', component: HomepageComponent}
]

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
})
export class HomepageModule { }
