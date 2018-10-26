import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';

import { Link } from '../models/link.model';

@Component({
  selector: 'app-footer-bar-links',
  templateUrl: './footer-bar-links.component.html',
  styleUrls: ['./footer-bar-links.component.scss'],
  providers: [DatabaseService]
})
export class FooterBarLinksComponent implements OnInit {

  customerLinks: FirebaseListObservable<any[]>;
  aboutLinks: FirebaseListObservable<any[]>;
  darkLinks: FirebaseListObservable<any[]>;
  links: FirebaseListObservable<any[]>;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.links = this.databaseService.getLinks();
    this.links.subscribe(res => console.log(res));
    this.aboutLinks = this.databaseService.getAboutLinks();
    this.customerLinks = this.databaseService.getCustomerLinks();
    this.darkLinks = this.databaseService.getDarkLinks();
  }

}
