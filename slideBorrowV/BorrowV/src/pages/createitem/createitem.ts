import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Getdata } from '../../app/Model';

/**
 * Generated class for the CreateitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createitem',
  templateUrl: 'createitem.html',
})
export class CreateitemPage {


  HttpClient: any;
  data: Getdata;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.data = new Getdata();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateitemPage');
  }

  createitem() {

    let option = { "headers": { "Content-Type": "application/json" } };
    // this.callpost = { id: "8", nameitem: "abcde", quantity: 12 };
    this.http.post("https://demoionic2.azurewebsites.net/api/Manageitem/Createitem",
      JSON.stringify(this.data),
      option).subscribe((result: any) => {
        this.navCtrl.pop()
        console.log(result);
      }, error => {
        console.log(error);
      });
  }
}

