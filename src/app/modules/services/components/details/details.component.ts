import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ISeccionServices } from './../../../../interfaces/ISeccion.Services.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() content: ISeccionServices;

  allContent: ISeccionServices[] = [];
  allContentFilter: ISeccionServices[] = [];

  constructor(public modalController: ModalController, private http: HttpClient) { }

  ngOnInit() {
    console.log("content ", this.content);
    this.getContent();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({ 
      'dismissed': true
    });
  }

  getContent() {
    this.http.get("assets/data/services-home.json").subscribe((resp: ISeccionServices[]) => {
      this.allContent = resp;
      this.filterContent(this.content._id);
    });
  }

  filterContent(id: any) {
    this.allContentFilter = this.allContent.filter(x => x._id != id);
    this.content = this.allContent.find(x => x._id == id);
  }

}
