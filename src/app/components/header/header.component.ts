import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { AnimationOptions } from 'ngx-lottie';
import { IMenu } from 'src/app/interfaces/IMenus.inteface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() menus: IMenu[];
  @Input() showMenu: boolean = true;


  options: AnimationOptions;
  isLandScape = false;
  constructor(private router: Router) {

  }

  // position: fixed !important;
  //   z-index: 10 !important;
  //   margin-left: -10% !important;
  //   margin-top: -9% !important;
  styles: Partial<CSSStyleDeclaration> = {
    position: 'fixed',
    zIndex: '10',
    marginLeft: '-10%'
  };

  ngOnInit() {
    this.options = {
      path: './../../assets/videos/logo-data.json',
      loop: 0
    }
  }

  redirect(path: string) {
    this.router.navigate([path])
  }

}
