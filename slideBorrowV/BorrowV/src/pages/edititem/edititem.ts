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
data : Getdata;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.data = new Getdata();
    console.log(this.data.nameitem);
      this.http.get("https://demoionic2.azurewebsites.net/api/Values/Get/" + this.navParams.data.detaildata)
      .subscribe((data: any) => {
        this.data = data
        console.log(data);
      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });
   
  }

  
  Edit(){
    let option = { "headers": { "Content-Type": "application/json" } };
    // this.callpost = { id: "8", nameitem: "abcde", quantity: 12 };
    this.http.post("https://demoionic2.azurewebsites.net/api/Values/Edit/Edit",
      JSON.stringify(this.data),
      option).subscribe((result: any) => {
        this.navCtrl.pop()
        // this.navCtrl.push(ManageitemPage).then(() => {
        //   let index = 1;
        //   this.navCtrl.remove(index);
        // });

        console.log(result);
      }, error => {
        console.log(error);
      });
  }

 

}
