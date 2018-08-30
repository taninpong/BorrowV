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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LockerPage,
    EdititemPage,
    DeleteitemPage,
    TranferitemPage,
    CreateitemPage,
    ManageitemPage,
    KeylistPage,
    LogoutPage,
    LoginPage,
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
    LockerPage,
    EdititemPage,
    DeleteitemPage,
    TranferitemPage,
    CreateitemPage,
    ManageitemPage,
    KeylistPage,
    LogoutPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
