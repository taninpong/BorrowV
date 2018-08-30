import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailborrowPage } from '../detailborrow/detailborrow';

/**
 * Generated class for the BorrowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-borrow',
  templateUrl: 'borrow.html',
})
export class BorrowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowPage');
  }
  godetailborrow(){
    this.navCtrl.push(DetailborrowPage);
  }

}
