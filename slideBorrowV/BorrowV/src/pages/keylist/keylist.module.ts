import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeylistPage } from './keylist';

@NgModule({
  declarations: [
    KeylistPage,
  ],
  imports: [
    IonicPageModule.forChild(KeylistPage),
  ],
})
export class KeylistPageModule {}
