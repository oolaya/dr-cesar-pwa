import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { IonicModule } from '@ionic/angular';
import {
  HttpClientModule
} from "@angular/common/http";
import { LottieModule } from 'ngx-lottie';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SendEmailComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    HttpClientModule,
    LottieModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LottieModule
  ],
  entryComponents: [
    SendEmailComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
