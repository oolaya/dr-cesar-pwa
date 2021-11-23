import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { SendEmailComponent } from 'src/app/modules/shared/components/send-email/send-email.component';
declare const BeerSlider;

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss'],
})
export class DiagnosisComponent implements OnInit {
  imgTakend: any;
  selected: any;
  userSender: any;
  excuteSend: boolean = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  slides = [];

  constructor(public modalController: ModalController, private http: HttpClient) { }
  secctionDx = 1;
  ngOnInit() {
    this.getSlides();
  }

  createCompare() {
    this.slides.forEach((element) => {
      new BeerSlider(document.getElementById('slider_' + element.id));
    });
  }

  getSlides() {
    this.http.get('assets/data/diagnosis-cases.json').subscribe((diag: any) => {
      this.slides = diag;
    })
  }

  camera() {
    const isAvailable = Capacitor.isPluginAvailable('Camera');
    if (!isAvailable) {
      // Have the user upload a file instead
    } else {
      // Otherwise, make the call:
      this.takePicture();
    }
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    });
    this.imgTakend = image.dataUrl;
    setTimeout(() => {
      this.createCompare();
    }, 500);
  };

  clear() {
    this.imgTakend = null;
    this.selected = null;
    this.userSender = null;
    this.excuteSend = false;
  }

  async presentModal(item) {
    this.selected = item;
    const modal = await this.modalController.create({
      component: SendEmailComponent,
      cssClass: 'send-email-modal',
      backdropDismiss: false
    });
    modal.onDidDismiss().then((data: any) => {
      this.userSender = data.data.data.value;
      this.excuteSend = data.data.data.valid;
    });
    return await modal.present();
  }

  createBeer(event: any) {
    setTimeout(() => {
      new BeerSlider(document.getElementById('slider_' + event.detail.value));
    }, 90);
  }

  setSeccion(id) {
    this.secctionDx = id;
  }
}
