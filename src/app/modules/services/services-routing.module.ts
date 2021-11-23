import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { OrthodonticsComponent } from './components/orthodontics/orthodontics.component';
import { ServicesHomeComponent } from './components/services-home/services-home.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesHomeComponent
  },
  {
    path: 'orthodontics',
    component: OrthodonticsComponent
  },
  {
    path: 'diagnosis',
    component: DiagnosisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
