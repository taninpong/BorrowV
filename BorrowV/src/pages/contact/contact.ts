import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CreateitemPage } from '../createitem/createitem';
import { HistoryPage } from '../History/history';
import { ListkeyPage } from '../listkey/listkey';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,private camera: Camera,private barcodeScanner: BarcodeScanner) {

  }

  Go() {
    this.navCtrl.push(LoginPage);
  }
  Createitem() {
    this.navCtrl.push(CreateitemPage);
  }
  Gohistory() {
    this.navCtrl.push(HistoryPage);
  }
  Golistkey() {
    this.navCtrl.push(ListkeyPage);
  }
  Opencamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
  OpenQR(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
