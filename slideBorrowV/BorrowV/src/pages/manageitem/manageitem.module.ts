import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageitemPage } from './manageitem';

@NgModule({
  declarations: [
    ManageitemPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageitemPage),
  ],
})
export class ManageitemPageModule {}
