import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { FooterBarLinksComponent } from './footer-bar-links/footer-bar-links.component';
import { FooterBarSocialComponent } from './footer-bar-social/footer-bar-social.component';
import { NavBarMainComponent } from './nav-bar-main/nav-bar-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterBarComponent,
    FooterBarLinksComponent,
    FooterBarSocialComponent,
    NavBarMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
