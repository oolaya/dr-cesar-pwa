import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SectionComponent } from './components/section/section.component';
import { WhoiamComponent } from './components/whoiam/whoiam.component';
import { CommonModule } from '@angular/common';
import { HomeSeccionComponent } from './components/home-seccion/home-seccion.component';


@NgModule({
  declarations: [
    HomeComponent,
    SectionComponent,
    WhoiamComponent,
    HomeSeccionComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    LandingRoutingModule
  ],
  entryComponents:[
    SectionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingModule { }
