import { HomepageModule } from './homepage/homepage.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
