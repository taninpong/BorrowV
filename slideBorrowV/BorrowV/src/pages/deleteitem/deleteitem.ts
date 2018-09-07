import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Getdata } from '../../app/Model';

/**
 * Generated class for the DeleteitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deleteitem',
  templateUrl: 'deleteitem.html',
})
export class DeleteitemPage {
  detaildata: any[];
  data: Getdata;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

    this.http.get("https://demoionic2.azurewebsites.net/api/Manageitem/Getitem")
      .subscribe((data: any) => {
        this.detaildata = data
        console.log("Keyid"+data);
      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteitemPage/');
  }
  delete() {
    let option = { "headers": { "Content-Type": "application/json" } };
    // var data2 = data.nameitem.ischeck;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    this.http.post("https://demoionic2.azurewebsites.net/api/Locker/DeleteItemSlot/"+this.data.id,
    this.data.id,
      option).subscribe((result: any) => {
        this.navCtrl.pop()
        console.log(result);
      }, error => {
        console.log(error);
      });
  }
}

