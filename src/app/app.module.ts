import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { baseURL } from '../shared/baseurl';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { FavoritesPage } from '../pages/favorites/favorites';
import { CommentPage } from '../pages/comment/comment';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import firebase from 'firebase';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactPage,
    FavoritesPage,
    CommentPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactPage,
    FavoritesPage,
    CommentPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmailComposer,
    ProcessHttpmsgProvider,
    {provide: 'BaseURL', useValue: baseURL},
    FavoriteProvider,
    SocialSharing,
    Camera,
    Network,
    CallNumber
  ]
})
export class AppModule {}

var firebaseConfig = {
  apiKey: "AIzaSyC6JXlP1_H9m618-fhxBdpQQaicWRTPGiA",
  authDomain: "startuplady.firebaseapp.com",
  databaseURL: "https://startuplady.firebaseio.com",
  projectId: "startuplady",
  storageBucket: "startuplady.appspot.com",
  messagingSenderId: "169429578638",
  appId: "1:169429578638:web:7b14db74731cec7f206adf",
  measurementId: "G-LJGP1HTSGC"
};

firebase.initializeApp(firebaseConfig);