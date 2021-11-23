import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { MindComponent } from './components/mind/mind.component';
import { NeoHomeComponent } from './components/neo-home/neo-home.component';
import { SpiritComponent } from './components/spirit/spirit.component';

const routes: Routes = [
  {
    path: '', component: NeoHomeComponent
  },
  {
    path: 'start', component: NeoHomeComponent
  },
  {
    path: 'mind', component: MindComponent
  },
  {
    path: 'spirit', component: SpiritComponent
  },
  {
    path: 'body', component: BodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeoRoutingModule { }
