import { Injectable } from '@angular/core';
import { Link } from './models/link.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  links: FirebaseListObservable<any[]>;
  aboutLinks: FirebaseListObservable<any[]>;
  customerLinks: FirebaseListObservable<any[]>;
  darkLinks: FirebaseListObservable<any[]>;
  shopLinks: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.links = database.list('links')
    this.aboutLinks = database.list('links/aboutLinks');
    this.customerLinks = database.list('links/customerLinks');
    this.darkLinks = database.list('links/darkLinks');
    this.shopLinks = database.list('links/shopLinks');
  }

  getLinks() {
    return this.links;
  }

  getAboutLinks() {
    return this.aboutLinks;
  }

  getCustomerLinks() {
    return this.customerLinks;
  }

  getDarkLinks() {
    return this.darkLinks;
  }

  getShopLinks() {
    return this.shopLinks;
  }

}
