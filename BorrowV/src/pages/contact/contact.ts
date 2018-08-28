import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CreateitemPage } from '../createitem/createitem';
import { HistoryPage } from '../History/history';
import { ListkeyPage } from '../listkey/listkey';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  Go() {
    this.navCtrl.push(LoginPage);
  }
  Createitem() {
    this.navCtrl.push(CreateitemPage);
  }
  Gohistory(){
    this.navCtrl.push(HistoryPage);
  }
  Golistkey(){
    this.navCtrl.push(ListkeyPage);
  }
}
