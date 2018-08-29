import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateitemPage } from './createitem';

@NgModule({
  declarations: [
    CreateitemPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateitemPage),
  ],
})
export class CreateitemPageModule {}
