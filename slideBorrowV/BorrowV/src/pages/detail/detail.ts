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
    console.log(this.navParams.data.detaildata);
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
    // var data2 = data.nameitem.ischeck;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    this.http.delete("https://demoionic2.azurewebsites.net/api/Locker/DeleteItemSlot/" + this.navParams.data.detaildata
    ).subscribe((result: any) => {
      this.navCtrl.pop()
      console.log(result);
    }, error => {
      console.log(error);
    });
  }
  Edit(data) {

    this.navCtrl.push(EdititemPage, {
      detaildata: data
    });
    console.log("5555" + this.data);

  }

}

