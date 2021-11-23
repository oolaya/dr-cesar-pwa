import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { IWhatsApp } from './../../interfaces/IWhatsApp.interface';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private callNumber: CallNumber, public platform: Platform, private inAppBrowser: InAppBrowser, private appAvailability: AppAvailability) { }


  sendWhatsApp(objet: IWhatsApp): string {
    console.info("Oscar Olaya", objet.msn ? `${environment.cms.api_whatsapp}phone=${objet.phone}&text=${objet.msn}` : `${environment.cms.api_whatsapp}phone=${objet.phone}`);
    console.error("Oscar Olaya", objet.msn ? `${environment.cms.api_whatsapp}phone=${objet.phone}&text=${objet.msn}` : `${environment.cms.api_whatsapp}phone=${objet.phone}`)
    return objet.msn ? `${environment.cms.api_whatsapp}phone=${objet.phone}&text=${objet.msn}` : `${environment.cms.api_whatsapp}phone=${objet.phone}`;
  }

  callPhone(): void {
    this.callNumber.callNumber("573164185391", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  sendLaunchApp(item: any) {
    switch (item.name) {
      case 'facebook':
        this.launchApp(
          'fb://', 'com.facebook.katana',
          'fb://profile/CesarSanabriaOrtodoncia',
          'fb://page/CesarSanabriaOrtodoncia',
          'https://www.facebook.com/CesarSanabriaOrtodoncia');
        break;
      case 'instagram':
        this.launchApp(
          'instagram://',
          'com.instagram.android',
          'instagram://user?username=drcesarsanabria',
          'instagram://user?username=drcesarsanabria',
          'https://www.instagram.com/drcesarsanabria');
        break;
      case 'linkedin':
        this.launchApp(
          'linkedin://', 'com.linkedin.android',
          'linkedin://in/cesar-sanabria',
          'linkedin://in/cesar-sanabria',
          'https://linkedin.com/in/cesar-sanabria');
        break;
      case 'whatsapp':
        this.launchApp(
          'whatsapp://', 'com.whatsapp.android',
          'whatsapp//send?phone=573164185391',
          'whatsapp//send?phone=',
          'https://wa.me/573164185391');
        break;
      default:
        break;
    }
  }

  private launchApp(iosApp: string, androidApp: string, appUrlIOS: string, appUrlAndroid: string, webUrl: string) {
    let app: string;
    let appUrl: string;
    // check if the platform is ios or android, else open the web url
    if (this.platform.is('ios')) {
      app = iosApp;
      appUrl = appUrlIOS;
    } else if (this.platform.is('android')) {
      app = androidApp;
      appUrl = appUrlAndroid;
    } else {
      const browser: InAppBrowserObject = this.inAppBrowser.create(webUrl, '_system');
      return;
    }
    this.appAvailability.check(app).then(
      () => {
        // success callback, the app exists and we can open it
        const browser: InAppBrowserObject = this.inAppBrowser.create(appUrl, '_system');
      },
      () => {
        // error callback, the app does not exist, open regular web url instead
        const browser: InAppBrowserObject = this.inAppBrowser.create(webUrl, '_system');
      }
    );
  }


  public animationLottie(config: any) {
    for (const playerId in config) {
      // Get the lottie player element and lottie reference
      const player: any = document.getElementById(playerId);

      // Skip rest if the player element was not found
      if (!player) {
        console.log(
          `Invalid player element specified for ${playerId}. Skipping...`
        );
        continue;
      }
      
      // Get the configured container. Use player as fallback if unconfigured or invalid
      const container =
        config[playerId].container !== undefined
          ? document.getElementById(config[playerId].container)
          : player;

      // Skip rest if the container element was not found
      if (!container) {
        console.log(
          `Invalid container element specified for ${playerId}. Skipping...`
        );
        continue;
      }

      // Get the bounding box for the lottie player or container
      const { top, bottom, height } = container.getBoundingClientRect();

      // Calculate current view percentage
      const current = window.innerHeight - top;
      const max = window.innerHeight + height;
      const currentPercent = current / max;

      // // Skip if out of viewport
      if (currentPercent < 0 || currentPercent > 1) {
        continue;
      }

      // Find the first action that satisfies the current position conditions
      const action = config[playerId].actions.find(
        ({ start, end }) => currentPercent >= start && currentPercent <= end
      );

      // Skip if no matching action was found!
      if (!action) {
        continue;
      }

      // Get lottie instance
      const lottie = player.getLottie();
      lottie.loop = true;

      // Process action types:
      if (action.type === "seek") {
        // Seek: Go to a frame based on player scroll position action
        lottie.playSegments(action.frames, true);
        lottie.goToAndStop(
          Math.ceil(
            ((currentPercent - action.start) / (action.end - action.start)) *
            lottie.totalFrames
          ),
          true
        );
      } else if (action.type === "loop") {
        // Loop: Loop a given frames
        if (lottie.isPaused === true) {
          lottie.playSegments(action.frames, true);
        }
      } else if (action.type === "play") {
        // Play: Reset segments and continue playing full animation from current position
        if (lottie.isPaused === true) {
          lottie.resetSegments();
        }
        lottie.play();
      } else if (action.type === "stop") {
        // Stop: Stop playback
        lottie.goToAndStop(action.frames[0]);
        lottie.stop();
      } else if (action.type === "hover") {
        container.addEventListener("mouseenter", function () {
          if (lottie.isPaused === true) {
            lottie.playSegments(action.frames, true);
          }
        });
        container.addEventListener("mouseleave", function () {
          if (lottie.isPaused === false) {
            lottie.pause();
          }
        });
      }
    }

  }
}
