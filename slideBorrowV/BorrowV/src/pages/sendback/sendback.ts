import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LockerPage } from '../locker/locker';

/**
 * Generated class for the SendbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendback',
  templateUrl: 'sendback.html',
})
export class SendbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendbackPage');
  }
  Lockker(){
    this.navCtrl.push(LockerPage);
  }

}
