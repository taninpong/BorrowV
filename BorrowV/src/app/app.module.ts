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
import { ListkeyPage } from '../pages/listkey/listkey';
=======
import { HistoryPage } from '../pages/History/history';
import { DetailhistoryPage } from '../pages/detailhistory/detailhistory';
>>>>>>> 9cd797c51e259545822e85bc474b7da3cd751d03

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
    ListkeyPage
=======
    HistoryPage,
    DetailhistoryPage

>>>>>>> 9cd797c51e259545822e85bc474b7da3cd751d03
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
    ListkeyPage
=======
    HistoryPage,
    DetailhistoryPage
>>>>>>> 9cd797c51e259545822e85bc474b7da3cd751d03
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
