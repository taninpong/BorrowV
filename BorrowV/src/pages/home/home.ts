import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListkeyPage } from '../listkey/listkey';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  listkey(){
    this.navCtrl.push(ListkeyPage);
    
  }
}
