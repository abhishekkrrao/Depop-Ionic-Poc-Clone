import { Component, ViewChild } from '@angular/core';
import { Platform, Nav  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { timer } from 'rxjs/observable/timer';
import { NativeStorage } from '@ionic-native/native-storage';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  message:string;
  showSplash = true;

  email:string;
  pass:string;


  constructor(public nativeStorage:NativeStorage,public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {

    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)

      this.getMyName();

     


    });
  }



  public getMyName() :  void {
    this.nativeStorage.getItem('my-identity-card')
  . then (
      data  => {

       
        this.email  =  data.email ;
        this.pass  =   data.pass ;
    
        if(this.email!=null && this.email.length>0)
        {
      
          this.rootPage = TabsPage;
        }
        else
        {
          this.rootPage = HomePage;
        }
        
      },
      error  =>  {
     
        this.rootPage = HomePage;
      }
    );

  }


}

