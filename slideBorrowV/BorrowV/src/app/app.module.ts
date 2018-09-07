import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LockerPage } from '../pages/locker/locker';
import { EdititemPage } from '../pages/edititem/edititem';
import { DeleteitemPage } from '../pages/deleteitem/deleteitem';
import { TranferitemPage } from '../pages/tranferitem/tranferitem';
import { CreateitemPage } from '../pages/createitem/createitem';
import { ManageitemPage } from '../pages/manageitem/manageitem';
import { KeylistPage } from '../pages/keylist/keylist';
import { LogoutPage } from '../pages/logout/logout';
import { LoginPage } from '../pages/login/login';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BorrowPage } from '../pages/borrow/borrow';
import { SendbackPage } from '../pages/sendback/sendback';
import { DetailborrowPage } from '../pages/detailborrow/detailborrow';
import { ConfirmborrowPage } from '../pages/confirmborrow/confirmborrow';
import { DetailsendbackPage } from '../pages/detailsendback/detailsendback';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetailPage } from '../pages/detail/detail';
import { AddlockerPage } from '../pages/addlocker/addlocker';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BorrowPage,
    SendbackPage,
    LockerPage,
    EdititemPage,
    DeleteitemPage,
    TranferitemPage,
    CreateitemPage,
    ManageitemPage,
    KeylistPage,
    LogoutPage,
    LoginPage,
    BorrowPage,
    DetailborrowPage,
    ConfirmborrowPage,
    DetailPage,
    AddlockerPage,
    DetailsendbackPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BorrowPage,
    SendbackPage,
    LockerPage,
    EdititemPage,
    DeleteitemPage,
    TranferitemPage,
    CreateitemPage,
    ManageitemPage,
    KeylistPage,
    LogoutPage,
    LoginPage,
    BorrowPage,
    DetailborrowPage,
    ConfirmborrowPage,
    BorrowPage,
    DetailPage,
    AddlockerPage,
    DetailsendbackPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule { }
