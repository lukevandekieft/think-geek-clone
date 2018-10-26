import { Injectable } from '@angular/core';
import { Link } from './models/link.model';
import { customerLinks, aboutLinks, darkLinks } from './mock-links';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  links: FirebaseListObservable<any[]>;
  aboutLinks: FirebaseListObservable<any[]>;
  customerLinks: FirebaseListObservable<any[]>;
  darkLinks: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.links = database.list('links')
    this.aboutLinks = database.list('links/aboutLinks');
    this.customerLinks = database.list('links/customerLinks');
    this.darkLinks = database.list('links/darkLinks');
  }

  getCustomerLinks() {
    return this.customerLinks;
  }

  getAboutLinks() {
    return this.aboutLinks;
  }

  getDarkLinks() {
    return this.darkLinks;
  }

  getLinks() {
    return this.links;
  }

}
