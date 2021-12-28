import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { ISeccion } from './../../../../interfaces/ISeccion.interface';
import { Router } from '@angular/router';
import { HelperService } from './../../../../services/helper/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('imgHome', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('transition', style({
        transform: 'scale(1.1)'
      })),
      transition('inactive => transition', animate('2000ms ease-in')),
      transition('transition => inactive', animate('2000ms ease-in'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  seccionsT: ISeccion[] = [];
  seccionsT1: ISeccion[] = [];
  video: any;
  indexImage: number = 0;
  imageStart: any;
  animation: string = 'inactive';
  factorG: number;
  options: AnimationOptions;
  private animationItem: AnimationItem | any = null;

  constructor(private http: HttpClient, private ngZone: NgZone, private helper: HelperService, private router: Router) {
    
  }

  doSomethingOnInternalScroll($event: any) {
   
  }



  ngOnInit() {
    this.getSeccion();
  }
  show = false;
  getSeccion() {
    this.http.get('./assets/data/home-seccions.json').subscribe((seccions: any) => {
      this.seccionsT = seccions.filter(x => x.active == true);
      this.seccionsT1 = seccions.filter(x => x.active == true);
      this.show = true;
      console.log(this.seccionsT);
    });
  }


  onLoopCompleteCalledTimes = 0;
  animationCreated(animationItem: any): void {
    NgZone.assertInAngularZone();
    this.animationItem = animationItem;
  }

  onLoopComplete(): void {
    this.ngZone.run(() => {
      this.onLoopCompleteCalledTimes++;
    });
  }


  play(): void {
    this.animationItem = this.animationItem;
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.play();
    });
  }

  pause(): void {
    this.animationItem = this.animationItem;
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.pause();
    });
  }

  stop(): void {
    this.animationItem = this.animationItem;
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.stop();
    });
  }

  setDirections(direction: any = 1 | -1): void {
    this.animationItem = this.animationItem;
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.setDirection(direction);
    });
  }

  redirect(path: string) {
    this.router.navigate([path])
  }
}
