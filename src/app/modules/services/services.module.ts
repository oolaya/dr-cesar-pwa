import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { OrthodonticsComponent } from './components/orthodontics/orthodontics.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { ServicesHomeComponent } from './components/services-home/services-home.component';
import { SectionServiceComponent } from './components/section-service/section-service.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    OrthodonticsComponent,
    DiagnosisComponent,
    ServicesHomeComponent,
    SectionServiceComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ServicesModule { }
