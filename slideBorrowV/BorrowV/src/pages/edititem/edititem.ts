import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Getdata } from '../../app/Model';
import { HttpClient } from '@angular/common/http';
import { ManageitemPage } from '../manageitem/manageitem';

/**
 * Generated class for the EdititemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edititem',
  templateUrl: 'edititem.html',
})
export class EdititemPage {
  dataDetail: Getdata;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.dataDetail = new Getdata();
    console.log("detailId>>>>>>>>>>>>>>>>>>" + navParams.data.detailId);
    this.http.get("https://demoionic2.azurewebsites.net/api/Locker/ListItemSlot/" + this.navParams.data.detailId)
      .subscribe((data: any) => {

        this.dataDetail = data
        console.log(this.dataDetail)
      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });

  }


  Edit() {
    console.log(this.dataDetail);
    let option = { "headers": { "Content-Type": "application/json" } };
    this.http.post("https://demoionic2.azurewebsites.net/api/Locker/Edititem/Edititem", JSON.stringify(this.dataDetail), option)
      .subscribe(data => {
        this.navCtrl.pop();
      });



  }
}
