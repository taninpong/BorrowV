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
  data2: any;
  getdata: any;
  itemname: any;
  quantity: any;
  // data: Getdata;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    // this.data = new Getdata();
    this.getdata = navParams.get('detaildata')
    console.log("iDDDDDD" + this.getdata);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateitemPage');
  }


  // ionViewDidEnter() {
  //   this.http.get("https://demoionic2.azurewebsites.net/api/Locker/Listiteminlocker/" + this.getdata)
  //     .subscribe((data: any) => {
  //       this.detaildata = data
  //       console.log(this.data2);
  //     },
  //       error => {
  //         alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
  //       });
  // }




  createitem() {

    let option = { "headers": { "Content-Type": "application/json" } };
    // this.callpost = { id: "8", nameitem: "abcde", quantity: 12 };
    this.http.post("https://demoionic2.azurewebsites.net/api/Locker/AddItemToLocker?id=" + this.getdata,
      {
        "nameitem": this.itemname,
        "quantity": this.quantity   
       }
      ,
      option).subscribe((result: any) => {
        this.navCtrl.pop()
        console.log("xxxx"+result);
      }, error => {
        console.log(error);
      });
  }
}

