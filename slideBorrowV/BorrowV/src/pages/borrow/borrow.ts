import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailborrowPage } from '../detailborrow/detailborrow';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../../app/Model';
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
  detaildata: any;
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    console.log("IDscan"+this.navParams.data.iditem);
  }

  ionViewDidEnter() {
    this.http.get("https://demoionic2.azurewebsites.net/api/Locker/Listiteminlocker/"+"367ab0e5-ad75-4abc-9265-ae73fe7dc797")
      .subscribe((data: any) => {
        this.detaildata = JSON.stringify(data.slotname)
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
  godetailborrow(){
    this.navCtrl.push(DetailborrowPage);
  }

}
