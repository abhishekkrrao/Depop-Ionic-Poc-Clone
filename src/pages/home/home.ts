import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { SingleviewPage } from '../singleview/singleview';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  overlayHidden: boolean = false;

  public number: any= [];


  constructor(public navCtrl: NavController,public nativePageTransitions: NativePageTransitions) {

    this.getIntTo();
  }

  public hideOverlay() {
    this.overlayHidden = false;
}


  openPage($event)
  {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };
    this.nativePageTransitions.slide(options);
    this.navCtrl.push(TabsPage);
  }

  gotoLogin($event)
  {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };
    this.nativePageTransitions.slide(options);
    this.navCtrl.push(LoginPage);
  }

  
  gotoSignup($event)
  {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };
    this.nativePageTransitions.slide(options);
    this.navCtrl.push(SignupPage);
  }

  getIntTo()
  {
    for(let i=200;i<300;i++)
    {
      this.number=i;
      console.log("https://picsum.photos/"+this.number);
    }

  }

  openPages(s:number)
  {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };
    this.nativePageTransitions.slide(options);
    this.navCtrl.push(SingleviewPage);
  }
}
