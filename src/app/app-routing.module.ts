import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) }
    ]

  },
  {
    path: 'neo',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/neo/neo.module').then(m => m.NeoModule) }
    ]

  },
  {
    path: 'services',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule) }
    ]

  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash:true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
