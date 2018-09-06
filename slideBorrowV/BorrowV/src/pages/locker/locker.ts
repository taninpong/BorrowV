import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ManageitemPage } from '../manageitem/manageitem';
import { AddlockerPage } from '../addlocker/addlocker';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LockerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locker',
  templateUrl: 'locker.html',
})
export class LockerPage {
  detaildata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    // this.barcodeScanner.scan().then(barcodeData => {
    //   console.log('Barcode data', barcodeData);
    // }).catch(err => {
    //   console.log('Error', err);
    // });

  }
  // /

  ionViewDidLoad() {
    console.log('ionViewDidLoad LockerPage');
  }

  ionViewDidEnter() {
    this.http.get("https://demoionic2.azurewebsites.net/api/Locker/ListLocker")
      .subscribe((data: any) => {
        this.detaildata = data
        console.log("Lockker" + JSON.stringify(data));
      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });
  }



  manageitem(slotid) {
    this.navCtrl.push(ManageitemPage, {
      detaildata: slotid
    });
    console.log("pre"+slotid);
  }
  addlocker() {
    this.navCtrl.push(AddlockerPage);

  }
}
