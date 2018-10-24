import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { FooterBarLinksComponent } from './footer-bar-links/footer-bar-links.component';
import { FooterBarSocialComponent } from './footer-bar-social/footer-bar-social.component';
import { NavBarMainComponent } from './nav-bar-main/nav-bar-main.component';
import { NavBarDirectoryComponent } from './nav-bar-directory/nav-bar-directory.component';
import { ShopLinksComponent } from './shop-links/shop-links.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterBarComponent,
    FooterBarLinksComponent,
    FooterBarSocialComponent,
    NavBarMainComponent,
    NavBarDirectoryComponent,
    ShopLinksComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
