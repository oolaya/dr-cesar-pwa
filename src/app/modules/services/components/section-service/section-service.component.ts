import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { DetailsComponent } from '../details/details.component';
import { ISeccionServices } from './../../../../interfaces/ISeccion.Services.interface';

@Component({
  selector: 'app-section-service',
  templateUrl: './section-service.component.html',
  styleUrls: ['./section-service.component.scss'],
})
export class SectionServiceComponent {

  @Input()
  set section(q: ISeccionServices) {
    this.seccionT = q;
    this.getOptions(q.resourceJson);
  }
  seccionT: ISeccionServices;
  options: AnimationOptions;
  private animationItem: AnimationItem | any = null;
  constructor(private router: Router, private ngZone: NgZone, public modalController: ModalController) {
  }

  redirect(path: string) {
    this.router.navigate([path])
  }


  getOptions(path: string): AnimationOptions {
    this.options = {
      path: path
    }
    return this.options;
  }

  animationCreated(animationItem: any): void {
    NgZone.assertInAngularZone();
    this.animationItem = animationItem;
    this.setSpeed(0.3);
  }

  setSpeed(vel: number): void {
    this.animationItem = this.animationItem;
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.setSpeed(vel);
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailsComponent,
      cssClass: 'details-modal',
      componentProps: {
        'content': this.seccionT
      }
    });
    return await modal.present();
  }

  action(): void {
    if (this.seccionT.content.type == 'popup') {
      this.presentModal();
    }
  }

}