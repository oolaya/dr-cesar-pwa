import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IMenu } from './interfaces/IMenus.inteface';
import { HelperService } from './services/helper/helper.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private http: HttpClient, private router: Router, private helper: HelperService) {
    this.setTitle(`${environment.enviroment}`);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  menus: IMenu[];
  contactos: IMenu[];
  ngOnInit() {
    this.getMenus();
    this.getContacts();
  }

  getMenus() {
    this.http.get('./../../assets/data/menus.json').subscribe((menus: any) => {
      this.menus = menus.filter(x => x.active == true);
    });
  }

  getContacts() {
    this.http.get('./../../assets/data/contact-options.json').subscribe((contact: any) => {
      this.contactos = contact.filter(x => x.active == true);
    });
  }

  redirect(url: string) {
    this.router.navigateByUrl(url);
  }

  sendUrl(item: any): void {
    this.helper.sendLaunchApp(item);
  }
}
