import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes,{
    paramsInheritanceStrategy: 'always',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
