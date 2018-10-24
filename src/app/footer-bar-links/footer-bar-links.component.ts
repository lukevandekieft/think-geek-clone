import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

import { Link } from '../models/link.model';

@Component({
  selector: 'app-footer-bar-links',
  templateUrl: './footer-bar-links.component.html',
  styleUrls: ['./footer-bar-links.component.scss'],
  providers: [DatabaseService]
})
export class FooterBarLinksComponent implements OnInit {
  customerLinks: Link[];
  aboutLinks: Link[] = [];
  darkLinks: Link[] = [];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.customerLinks = this.databaseService.getLinks();
    this.aboutLinks = this.databaseService.getLinks1();
    this.darkLinks = this.databaseService.getLinks2();
  }

}
