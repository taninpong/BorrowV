import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserLogin } from '../../app/Model';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myform: FormGroup;
   
  
    logForm(form) {
    console.log(form.value)
  }
  username: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myform = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.maxLength(1)])
    });
  }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    UserLogin.userlogin=this.username;
    this.navCtrl.setRoot(HomePage);
  }

}
