import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, ExtraOptions } from '@angular/router';

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
  loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'movies/:slug',
    loadChildren: () => import('./single-page/single-page.module').then(m => m.SinglePageModule)
  },
  {
    path: 'tags/:tag',
    loadChildren: () => import('./list-page/list-page.module').then(m => m.ListPageModule)
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
