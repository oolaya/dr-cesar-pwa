import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HelperService } from './../../../../services/helper/helper.service';
import { ISeccionServices } from './../../../../interfaces/ISeccion.Services.interface';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.scss'],
})
export class ServicesHomeComponent implements OnInit {
  seccionServices: ISeccionServices[] = [];
  constructor(private http: HttpClient, private helper: HelperService) { }

  animActions = {
    firstLottie: {
      container:"firstLottie_1",
      actions: [
        {
          start: 0.1,
          end: 1,
          type: "seek",
          frames: [0]
        }
      ]
    },
    secondtLottie: {
      container:"secondtLottie_2",
      actions: [
        {
          start: 0.1,
          end: 1,
          type: "seek",
          frames: [0]
        }
      ]
    },
    thirdLottie: {
      container:"thirdLottie_3",
      actions: [
        {
          start: 0.1,
          end: 1,
          type: "seek",
          frames: [0]
        }
      ]
    },
    fourthLottie: {
      container:"fourthLottie_4",
      actions: [
        {
          start: 0.1,
          end: 1,
          type: "seek",
          frames: [0]
        }
      ]
    }
  };


  ngOnInit() {
    this.getSeccion();
  }

  getSeccion() {
    this.http.get('/assets/data/services-home.json').subscribe((seccions: any) => {
      this.seccionServices = seccions.filter(x => x.active == true);
    });
  }

  doSomethingOnInternalScroll($event: any) {
    this.helper.animationLottie(this.animActions);
  }

}
