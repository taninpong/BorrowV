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


  detaildata: any;
  slotid: any;
  // getid: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    // console.log("xxx"+JSON.stringify(this.navParams.data));
    this.slotid = navParams.get('detaildata');
    console.log("ID++++"+this.slotid);
   
  }

  ionViewDidEnter() {
    this.http.get("https://demoionic2.azurewebsites.net/api/Locker/Listiteminlocker/"+this.slotid)
      .subscribe((data: any) => {
        this.detaildata = data.item
        console.log("xyz"+data);
      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });
  }
  ionViewDidLoad() {

  }
  createitem(idlocker) {
    console.log("++++++++++++++"+idlocker);
    this.navCtrl.push(CreateitemPage,{
      detaildata : idlocker
      
    });
    // manageitem(slotid) {
      //   this.navCtrl.push(ManageitemPage, {
        //     detaildata: slotid
        //   });
   
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
  detail(iditem) {

    this.navCtrl.push(DetailPage, {
      detaildata: iditem
    });
    console.log("--------------"+this.detaildata.id);
  }

}