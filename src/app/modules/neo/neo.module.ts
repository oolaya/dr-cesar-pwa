import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeoRoutingModule } from './neo-routing.module';
import { NeoHomeComponent } from './components/neo-home/neo-home.component';
import { MindComponent } from './components/mind/mind.component';
import { BodyComponent } from './components/body/body.component';
import { SpiritComponent } from './components/spirit/spirit.component';


@NgModule({
  declarations: [
    NeoHomeComponent,
    MindComponent,
    BodyComponent,
    SpiritComponent
  ],
  imports: [
    CommonModule,
    NeoRoutingModule
  ]
})
export class NeoModule { }
