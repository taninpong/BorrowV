import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateitemPage } from '../createitem/createitem';
import { DeleteitemPage } from '../deleteitem/deleteitem';
import { EdititemPage } from '../edititem/edititem';
import { TranferitemPage } from '../tranferitem/tranferitem';
import { HttpClient } from '@angular/common/http';
import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-manageitem',
  templateUrl: 'manageitem.html',
})
export class ManageitemPage {


  detaildata: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

  }

  ionViewDidEnter() {
    this.http.get("https://demoionic2.azurewebsites.net/api/Manageitem/Getitem")
      .subscribe((data: any) => {
        this.detaildata = data
        console.log(data);
      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });
  }
  ionViewDidLoad() {

  }
  createitem() {
    this.navCtrl.push(CreateitemPage);
  }
  deleteitem() {
    this.navCtrl.push(DeleteitemPage);

  }
  edititem() {
    this.navCtrl.push(EdititemPage);

  }
  tranferitem() {
    this.navCtrl.push(TranferitemPage);

  }
  detail(page2) {

    this.navCtrl.push(DetailPage, {
      detaildata: page2
    });
    console.log(this.detaildata);
  }

}




