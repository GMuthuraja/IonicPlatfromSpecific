import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(private loader: LoadingController, private platform: Platform) { }

  async ngOnInit() {
    const loading = await this.loader.create({
      message: "Loading",
      mode: "ios"
    })

    //await loading.present();
  }

  onClick(){
    if(this.platform.is('android')){
        console.log("Running on Android");
    }if(this.platform.is('ios')){
      console.log("Running on iOS");
    }if(this.platform.is('cordova')){
      console.log("Running on Cordova");
    }
  }
}
