import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateitemPage } from '../createitem/createitem';
import { DeleteitemPage } from '../deleteitem/deleteitem';
import { EdititemPage } from '../edititem/edititem';
import { TranferitemPage } from '../tranferitem/tranferitem';

/**
 * Generated class for the ManageitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manageitem',
  templateUrl: 'manageitem.html',
})
export class ManageitemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageitemPage');
  }
  createitem() { 
this.navCtrl.push(CreateitemPage);
  }
  deleteitem() {
this.navCtrl.push(DeleteitemPage);
    
  }
  edititem() {
    this.navCtrl.push(EdititemPage);

   }
  tranferitem() { 
    this.navCtrl.push(TranferitemPage);

  }
}
