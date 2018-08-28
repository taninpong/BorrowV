import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CreateitemPage } from '../createitem/createitem';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  
Go(){
  this.navCtrl.push(LoginPage);  
}
Createitem(){
  this.navCtrl.push(CreateitemPage);
}
}
