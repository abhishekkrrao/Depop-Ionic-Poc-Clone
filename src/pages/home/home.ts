import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { SingleviewPage } from '../singleview/singleview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  overlayHidden: boolean = false;

  public number: any= [];


  constructor(public navCtrl: NavController) {

    this.getIntTo();
  }

  public hideOverlay() {
    this.overlayHidden = false;
}


  openPage($event)
  {
    this.navCtrl.push(TabsPage);
  }

  gotoLogin($event)
  {
    this.navCtrl.push(LoginPage);
  }

  
  gotoSignup($event)
  {
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

    this.navCtrl.push(SingleviewPage);
  }
}
