import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LockerPage } from '../locker/locker';
import { EdititemPage } from '../edititem/edititem';
import { CreateitemPage } from '../createitem/createitem';
import { DeleteitemPage } from '../deleteitem/deleteitem';
import { TranferitemPage } from '../tranferitem/tranferitem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner
  ) {

  }
  barcodescan(){
    
    this.barcodeScanner.scan().then(barcodeData => {
      if(barcodeData.text === "openborrow"){
        this.navCtrl.push(BorrowPage);
      }
     }).catch(err => {
         console.log('Error', err);
     });
  }
  }
  Createitem() {
    this.navCtrl.push(CreateitemPage);

  }
  DeleteItem() {
    this.navCtrl.push(DeleteitemPage);

  }
  Tranferitem() {
    this.navCtrl.push(TranferitemPage);

  }
}
