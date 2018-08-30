import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowPage } from './borrow';

@NgModule({
  declarations: [
    BorrowPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowPage),
  ],
})
export class BorrowPageModule {}
