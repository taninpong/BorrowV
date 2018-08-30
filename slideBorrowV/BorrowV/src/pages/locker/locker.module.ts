import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LockerPage } from './locker';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    LockerPage,
    Camera
  ],
  imports: [
    IonicPageModule.forChild(LockerPage),
  ],
})
export class LockerPageModule {}
