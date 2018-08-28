import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
<<<<<<< HEAD
import { HistoryPage } from '../pages/History/history';
import { DetailhistoryPage } from '../pages/detailhistory/detailhistory';
=======
import { CreateitemPage } from '../pages/createitem/createitem';
>>>>>>> 49734c50acf27a7cf2326da741025f0b013cbc23

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = HistoryPage;
=======
  rootPage:any = CreateitemPage;
>>>>>>> 49734c50acf27a7cf2326da741025f0b013cbc23

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
