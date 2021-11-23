import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { IEmailSender } from 'src/app/interfaces/IEmailSender.interface';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
})
export class SendEmailComponent implements OnInit {
  dxForm: FormGroup;
  constructor(public modalController: ModalController, private formBuilder: FormBuilder, private email: EmailService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.dxForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      whatsApp: [true],
      iemail: [true]
    })

  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
      data: this.dxForm
    });
  }

  sendDx() {
    this.presentLoading();
    this.email.sendEmail(this.buildBody()).subscribe((d) => {
      if (d) {
        this.dismiss();
      }
      this.loadingController.dismiss();
    })


  }

  buildBody(): IEmailSender {
    const body: IEmailSender = {
      subject: 'Solitud de valoración',
      body: `El señor ${this.dxForm.value.fullName} solicita una valoración.`,
      toEmails: [
        this.dxForm.value.email
      ],
      attachmentsFiles: [
        {
          file: null,
          name: '',
          ext: ''
        }
      ]
    };
    return body
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'spinner-class',
      message: 'Por favor espera...'
    });
    await loading.present();
  }

}
