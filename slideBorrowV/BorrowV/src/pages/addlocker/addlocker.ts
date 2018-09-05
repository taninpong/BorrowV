import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AddlockerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addlocker',
  templateUrl: 'addlocker.html',
})
export class AddlockerPage {
  detaildata: any;
  data: any;
  mymodel:any = { };

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidEnter() {
    this.http.get("https://demoionic2.azurewebsites.net/api/Locker/ListLocker")
      .subscribe((data: any) => {
        this.detaildata = data
        console.log("Lockker" + JSON.stringify(data));
      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddlockerPage');
  }
  addlocker() {
    let option = { "headers": { "Content-Type": "application/json" } };
    this.http.post("https://demoionic2.azurewebsites.net/api/Locker/Createlocker",
      {
        "slotname": this.mymodel.slotname
      },
      option).subscribe((result: any) => {
        this.navCtrl.pop()
        console.log(result);
      }, error => {
        console.log(error);
      });
  }

  //

}
