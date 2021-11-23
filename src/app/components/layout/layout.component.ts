import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { IMenu } from './../../interfaces/IMenus.inteface';
import { HelperService } from './../../services/helper/helper.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  menus: IMenu[];
  menusT: IMenu[];
  contacts: any[];
  itsMobile = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    public platform: Platform,
    private helper: HelperService
  ) {
    this.platform.resize.subscribe(async () => {
      this.mobile();
    });
  }
  ngOnInit() {
    this.getMenus();
    this.getOpiyionsContacts();
    this.mobile();
  }

  getMenus() {
    this.http.get('./../../../assets/data/menus.json').subscribe((menus: any) => {
      this.menus = menus.filter(x => x.active == true);
      this.menusT = menus.sort((a, b) => {
        if (a.menuId > b.menuId) {
          return -1;
        } else {
          return 1;
        }
      });
    });
  }

  getOpiyionsContacts() {
    this.http.get('./../../../assets/data/contact-options.json').subscribe((contacts: any) => {
      this.contacts = contacts.filter(x => x.active == true);
    });
  }

  redirect(url: string) {
    this.router.navigateByUrl(url);
  }

  mobile() {
    if (this.platform.is('android') || this.platform.is('ios') || this.platform.is('mobileweb') || this.platform.is("mobile")) {
      this.itsMobile = true;
    } else {
      this.itsMobile = false;
    }
  }

  sendUrl(item: any): void {
    this.helper.sendLaunchApp(item);
  }

  callPhone() {
    this.helper.callPhone();
  }


}
