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

  log(arg) {console.log(arg);}
  customerLinks: Link[];
  aboutLinks: Link[] = [];
  darkLinks: Link[] = [];
  links: FirebaseListObservable<any[]>;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.customerLinks = this.databaseService.getLinks3();
    this.links = this.databaseService.getLinks();
    this.links.subscribe(res => console.log(res[0]));
    this.aboutLinks = this.databaseService.getLinks1();
    this.darkLinks = this.databaseService.getLinks2();
  }

}
