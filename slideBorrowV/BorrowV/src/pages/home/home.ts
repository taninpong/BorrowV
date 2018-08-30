import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '../../../node_modules/@ionic-native/barcode-scanner';
import { BorrowPage } from '../borrow/borrow';
import { BarcodeScanner } from '../../../node_modules/@ionic-native/barcode-scanner';
import { BorrowPage } from '../borrow/borrow';

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
