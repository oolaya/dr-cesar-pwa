import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { ISeccion } from 'src/app/interfaces/ISeccion.interface';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-home-seccion',
  templateUrl: './home-seccion.component.html',
  styleUrls: ['./home-seccion.component.scss'],
})
export class HomeSeccionComponent implements OnInit {
  seccionsT: any = [];
  private animationItem: AnimationItem | any = null;
  animActions = {
    firstLottie: {
      actions: [
        {
          start: 0.5,
          end: 1,
          type: "seek",
          frames: [0,60]
        }
      ]
    }
  };

  constructor(private http: HttpClient, private helper: HelperService, private router: Router) {

  }


  doSomethingOnInternalScroll($event: any) {
    this.helper.animationLottie(this.animActions);
  }

  ngOnInit() {
    this.getSeccion();
  }

  animationCreated(animationItem: any): void {
    NgZone.assertInAngularZone();
    this.animationItem = animationItem;
  }

  getSeccion() {
    this.http.get('./assets/data/home-seccions.json').subscribe((seccions: any) => {
      this.seccionsT = seccions.filter(x => x.active == true);
    });
  }

  redirect(path: string) {
    this.router.navigate([path])
  }

}
