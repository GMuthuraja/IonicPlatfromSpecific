import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.platform.pause.subscribe(() => {
      console.log("Paused");
    });

    this.platform.resume.subscribe(() => {
      console.log("Resume");
    });

    //returns array of all possible results instead of exact device name
    console.log(this.platform.platforms());
    
    //returns true if app in landscape orientation 
    console.log(this.platform.isLandscape());

    //returns true if app in portrait orientation
    console.log(this.platform.isPortrait());
  }
}
