import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '../../../node_modules/@ionic-native/barcode-scanner';
import { BorrowPage } from '../borrow/borrow';
import { ConfirmborrowPage } from '../confirmborrow/confirmborrow';
import { UserLogin } from '../../app/Model';
import { ManageitemPage } from '../manageitem/manageitem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner
  ) {
    console.log("Login Now >>>" + UserLogin.userlogin);

  }
  barcodescan() {
    console.log("fefe");
    this.barcodeScanner.scan().then(barcodeData => {
      //QR : "borrow;f66cd89f-f52c-45fe-ab6e-083078894434"
      var strQr = barcodeData.text;
      var strBorrow = strQr.startsWith("borrow");
      var strReturn = strQr.startsWith("return");
      console.log(strQr);
      //QR : "f66cd89f-f52c-45fe-ab6e-083078894434"
      var stringQR = barcodeData.text;
      var substrQR = stringQR.substring(7);

      if (strBorrow == true) {
        this.navCtrl.push(ManageitemPage, { LockerId: substrQR });
      }
      // else if(strReturn == true){

      // }
      // if (barcodeData.text === "Confirm") {
      //   this.navCtrl.push(ConfirmborrowPage);
      // }
    }).catch(err => {
      console.log('Error', err);
    });


  }
}
