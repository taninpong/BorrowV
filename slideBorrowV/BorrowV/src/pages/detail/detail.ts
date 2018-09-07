import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Getdata, ListitemSlotResponse } from '../../app/Model';
import { EdititemPage } from '../edititem/edititem';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  dataitems: ListitemSlotResponse;
  detaildata: any[];
  idite: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    // iditem
    console.log("xxxxxxx" + this.navParams.data.detaildata);
    this.dataitems = new ListitemSlotResponse();


  }

  ionViewDidEnter() {
    console.log('getkey' + this.navParams.data.detaildata);
    this.http.get("https://demoionic2.azurewebsites.net/api/Locker/ListItemSlot/" + this.navParams.data.detaildata)
      .subscribe((data: any) => {
        this.dataitems = data

      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });
  }

  delete() {
    let option = { "headers": { "Content-Type": "application/json" } };
    // this.callpost = { id: "8", nameitem: "abcde", quantity: 12 };
    this.http.post("https://demoionic2.azurewebsites.net/api/Locker/DeleteItemSlot/" + this.navParams.data.detaildata,
     this.navParams.data.detaildata,
      option).subscribe((result: any) => {
        this.navCtrl.pop()
        console.log("xxxx" + result);
      }, error => {
        console.log(error);
      });
  }



  Edit(data) {
    console.log("fefefe" + data);
    this.navCtrl.push(EdititemPage, {
      detailId: data
    });


  }

}

