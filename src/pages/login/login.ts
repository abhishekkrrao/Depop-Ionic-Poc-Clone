import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;
  constructor(public nativeStorage:NativeStorage,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.presentLoading();


    this.nativeStorage.setItem('my-identity-card', {
      email: this.username ,
      pass: this.password 
      
    })
    . then (
      () => {
    
      },
      error  =>  console . error ( 'Error storing item' , error )
    );


  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}
