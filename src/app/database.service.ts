import { Injectable } from '@angular/core';
import { Link } from './models/link.model';
import { customerLinks, aboutLinks, darkLinks } from './mock-links';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }
  getLinks() {
    return customerLinks;
  }
  getLinks1() {
    return aboutLinks;
  }
  getLinks2() {
    return darkLinks;
  }
}
