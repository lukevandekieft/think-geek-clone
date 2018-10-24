import { Injectable } from '@angular/core';
import { Link } from './models/link.model';
import { customerLinks, aboutLinks, darkLinks } from './mock-links';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  links: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.links = database.list('links')
  }
  getLinks3() {
    return customerLinks;
  }
  getLinks1() {
    return aboutLinks;
  }
  getLinks2() {
    return darkLinks;
  }

  getLinks() {
    return this.links;
  }

}
