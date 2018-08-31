import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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
  callpost: Getdata;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateitemPage');
  }
  createitem() {

    let option = { "headers": { "Content-Type": "application/json" } };
    this.callpost = { id: "8", nameitem: "abcde", quantity: 12 };
    this.http.post("http://localhost:54264/api/Values/Post",
      this.callpost,
      option).subscribe((result: any) => {
        this.navCtrl.pop()
        console.log(result);
        
          }, error => {
          });

      }
}

export class Getdata {

  constructor(
    public id: string,
    public nameitem: string,
    public quantity: number,

  ) { }

}
