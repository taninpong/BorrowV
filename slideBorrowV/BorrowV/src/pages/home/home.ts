import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '../../../node_modules/@ionic-native/barcode-scanner';
import { BorrowPage } from '../borrow/borrow';
import { ConfirmborrowPage } from '../confirmborrow/confirmborrow';
import { UserLogin } from '../../app/Model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner
  ) {
    console.log("Login Now >>>"+UserLogin.userlogin);

  }
  barcodescan(){
    
    this.barcodeScanner.scan().then(barcodeData => {
      if(barcodeData.text === "openborrow"){
        this.navCtrl.push(BorrowPage);
      }
      if(barcodeData.text === "Confirm"){
        this.navCtrl.push(ConfirmborrowPage);
      }
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
