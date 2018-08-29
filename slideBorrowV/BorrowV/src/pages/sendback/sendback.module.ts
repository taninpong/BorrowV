import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendbackPage } from './sendback';

@NgModule({
  declarations: [
    SendbackPage,
  ],
  imports: [
    IonicPageModule.forChild(SendbackPage),
  ],
})
export class SendbackPageModule {}
