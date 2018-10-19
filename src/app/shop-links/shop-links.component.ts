import { Component, OnInit } from '@angular/core';

import { Link } from '../models/link-model';

@Component({
  selector: 'app-shop-links',
  templateUrl: './shop-links.component.html',
  styleUrls: ['./shop-links.component.scss']
})

export class ShopLinksComponent implements OnInit {
  navLinks: Link[] = [
    new Link('What\'s New', 'https://www.thinkgeek.com/whats-new/')
  ]
  constructor() { }

  ngOnInit() {
  }

}
