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

  constructor(public navCtrl: NavController) {

  }
  manageitem() {
    this.navCtrl.push(LockerPage);
  }
  Edititem() {
    this.navCtrl.push(EdititemPage);

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
