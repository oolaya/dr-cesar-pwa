import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSeccionComponent } from './components/home-seccion/home-seccion.component';
import { HomeComponent } from './components/home/home.component';
import { WhoiamComponent } from './components/whoiam/whoiam.component';

const routes: Routes = [
  {
    path: '',
    component: HomeSeccionComponent
  },
  {
    path: 'home',
    component: HomeSeccionComponent
  }
  ,
  {
    path: 'biography',
    component: WhoiamComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
