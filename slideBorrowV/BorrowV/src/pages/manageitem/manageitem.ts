import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateitemPage } from '../createitem/createitem';
import { DeleteitemPage } from '../deleteitem/deleteitem';
import { EdititemPage } from '../edititem/edititem';
import { TranferitemPage } from '../tranferitem/tranferitem';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ManageitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manageitem',
  templateUrl: 'manageitem.html',
})
export class ManageitemPage {

  
  detaildata: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.http.get("https://demoionic2.azurewebsites.net/api/Values/Get")
  .subscribe((data:any) => {
    this.detaildata = data
     console.log(data);
     
  },
    error => {
      alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageitemPage');
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
  
}
export class Getdata {

  constructor(
    public id: string,
    public name: string,
    public quantity: number,

  ) { }

}


  

