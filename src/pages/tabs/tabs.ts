import { Component } from "@angular/core";
import { ExplorePage } from "../explore/explore";
import { PersonPage } from "../person/person";
import { SearchPage } from "../search/search";
import { NavController, NavParams } from 'ionic-angular';
import { TelegramPage } from "../telegram/telegram";
import { CameraPage } from "../camera/camera";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
  export class TabsPage {
    
  

     tab1Root: any;
     tab2Root: any;
     tab3Root: any;
     tab4Root: any;
     tab5Root: any;


     ola:any=true;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.tab1Root = ExplorePage;
      this.tab2Root = SearchPage;
      this.tab3Root = CameraPage;
      this.tab4Root = TelegramPage;

      if(this.ola)
      {
        this.tab5Root = TelegramPage;
      }
      else
      {
        this.tab5Root = PersonPage;
      }

      

    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad TabPage');
    }
  }