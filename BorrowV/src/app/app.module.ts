import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { CreateitemPage } from '../pages/createitem/createitem';
<<<<<<< HEAD
import { HistoryPage } from '../pages/History/history';
import { DetailhistoryPage } from '../pages/detailhistory/detailhistory';
=======
import { ViewdetailPage } from '../pages/viewdetail/viewdetail';
>>>>>>> 49734c50acf27a7cf2326da741025f0b013cbc23

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CreateitemPage,
<<<<<<< HEAD
    HistoryPage,
    DetailhistoryPage
=======
    ViewdetailPage
>>>>>>> 49734c50acf27a7cf2326da741025f0b013cbc23
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CreateitemPage,
<<<<<<< HEAD
    HistoryPage,
    DetailhistoryPage
=======
    ViewdetailPage
>>>>>>> 49734c50acf27a7cf2326da741025f0b013cbc23
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
