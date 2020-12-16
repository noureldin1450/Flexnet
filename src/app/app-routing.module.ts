import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, ExtraOptions } from '@angular/router';
import { RequstComponent } from './shared/comp/requst/requst.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 50],
  paramsInheritanceStrategy: 'always',
  preloadingStrategy: PreloadAllModules
}

const routes: Routes = [
  {
  path:'', 
  loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule),
  data:{
    route: 'homepage'
  }
  },
  {
    path: 'request',
    component: RequstComponent,
    data:{
      route: 'reqpage'
    }
  },
  {
    path: 'movies/:slug',
    loadChildren: () => import('./single-page/single-page.module').then(m => m.SinglePageModule),
  data:{
    route: 'moviepage'
  }
  },
  {
    path: 'tags/:tag',
    loadChildren: () => import('./list-page/list-page.module').then(m => m.ListPageModule),
    data:{
      route: 'tagspage'
    }
  },
  {
    path:'**', redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
