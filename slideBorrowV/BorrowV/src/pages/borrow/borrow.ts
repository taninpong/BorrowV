import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailborrowPage } from '../detailborrow/detailborrow';
import { HttpClient } from '@angular/common/http';
import { UserLogin,  } from '../../app/Model';
/**
 * Generated class for the BorrowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-borrow',
  templateUrl: 'borrow.html',
})
export class BorrowPage {
  detaildata: any = {};
  item: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    console.log("IDscan"+this.navParams.data.iditem);
    console.log("Username"+UserLogin.userlogin);
  }

  ionViewDidEnter() {
    this.http.get("https://demoionic2.azurewebsites.net/api/Locker/Listiteminlocker/"+this.navParams.data.iditem)
      .subscribe((data: any) => {
        this.detaildata = data
        this.item  = data.item
        //  console.log("xyz"+JSON.stringify(this.detaildata));
      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowPage');
  }
  borrow(){
    console.log("data"+JSON.stringify(this.detaildata));
    // https://demoionic2.azurewebsites.net/api/GetUser/BorrowItem?username=username
    let option = { "headers": { "Content-Type": "application/json" } };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    this.http.post("https://demoionic2.azurewebsites.net/api/GetUser/BorrowItem/"+UserLogin.userlogin,
    this.detaildata,
    // item   slotid
    option).subscribe((result: any) => {
      this.navCtrl.push(DetailborrowPage);
        console.log("dataxxx"+result);
      }, error => {
        console.log("error"+JSON.stringify(error));
      });
  }



}
