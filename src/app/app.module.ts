import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { PersonPage } from '../pages/person/person';
import { ExplorePage } from '../pages/explore/explore';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TelegramPage } from '../pages/telegram/telegram';
import { CameraPage } from '../pages/camera/camera';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Camera } from '@ionic-native/camera';
import { SingleviewPage } from '../pages/singleview/singleview';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    PersonPage,
    ExplorePage,
    LoginPage,
    SignupPage,
    TelegramPage,
    PersonPage,
    CameraPage,
    SingleviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    PersonPage,
    ExplorePage,
    LoginPage,
    SignupPage,
    TelegramPage,
    PersonPage,
    CameraPage,
    SingleviewPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Camera,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
