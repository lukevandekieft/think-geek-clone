import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';

import { Link } from '../models/link.model';

@Component({
  selector: 'app-shop-links',
  templateUrl: './shop-links.component.html',
  styleUrls: ['./shop-links.component.scss'],
  providers: [DatabaseService]
})

export class ShopLinksComponent implements OnInit {

  shopLinks: FirebaseListObservable<any[]>;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.shopLinks = this.databaseService.getShopLinks();
  }

}
