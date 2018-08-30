import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BorrowPage } from '../pages/borrow/borrow';
import { SendbackPage } from '../pages/sendback/sendback';
import { LockerPage } from '../pages/locker/locker';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BorrowPage,
    SendbackPage,
    LockerPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BorrowPage,
    SendbackPage,
    LockerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
