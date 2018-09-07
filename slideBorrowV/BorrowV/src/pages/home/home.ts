import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '../../../node_modules/@ionic-native/barcode-scanner';
import { BorrowPage } from '../borrow/borrow';
import { ConfirmborrowPage } from '../confirmborrow/confirmborrow';
import { UserLogin } from '../../app/Model';
import { ManageitemPage } from '../manageitem/manageitem';
import { LoginPage } from '../login/login';

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
    console.log("OpenQR");
    this.barcodeScanner.scan().then(barcodeData => {
      //QR : "borrow;f66cd89f-f52c-45fe-ab6e-083078894434"
      var strQr = barcodeData.text;
      var checkborrow = null;
      // strQr.startsWith("borrow")
      var strReturn = strQr.startsWith("return");
      console.log(strQr);
      //QR : "f66cd89f-f52c-45fe-ab6e-083078894434"
      // var stringQR = barcodeData.text;
      var substrQR = strQr.substring(7);

      console.log("substring"+substrQR);

if(checkborrow = strQr.startsWith("borrow") == true){
  this.navCtrl.push(BorrowPage, { iditem: substrQR });
}else if(checkborrow = strQr.startsWith("return") == true){
  this.navCtrl.push(LoginPage);
}else {}

      // if(substrQR == ";"){
      //   this.navCtrl.push(ManageitemPage, { LockerId: substrQR });
      // }else{
      //   this.navCtrl.push(DetailsendbackPage, { LockerId: substrQR });
      // }
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
