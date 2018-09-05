import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Getdata } from '../../app/Model';
import { EdititemPage } from '../edititem/edititem';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  data: Getdata;
  detaildata: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    console.log(this.navParams.data.detaildata);
    this.data = new Getdata();


  }

  ionViewDidEnter() {
    console.log('getkey'+this.navParams.data.detaildata);
    this.http.get("https://demoionic2.azurewebsites.net/api/Manageitem/Getitem/" + this.navParams.data.detaildata)
      .subscribe((data: any) => {
        this.data = data
        console.log(data);
      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });
  }
  delete() {
    // var data2 = data.nameitem.ischeck;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    this.http.delete("https://demoionic2.azurewebsites.net/api/Manageitem/Deleteitem/" +this.navParams.data.detaildata
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
    console.log(this.data);
    
  }
  
}

