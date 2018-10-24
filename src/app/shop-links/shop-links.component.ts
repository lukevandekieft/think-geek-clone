import { Component, OnInit } from '@angular/core';

import { Link } from '../models/link.model';

@Component({
  selector: 'app-shop-links',
  templateUrl: './shop-links.component.html',
  styleUrls: ['./shop-links.component.scss']
})

export class ShopLinksComponent implements OnInit {
  navLinks: Link[] = [
    new Link('What\'s New', 'https://www.thinkgeek.com/whats-new/'),
    new Link('Bestsellers', 'https://www.thinkgeek.com/bestsellers/'),
    new Link('Exclusives', 'https://www.thinkgeek.com/interests/exclusives/'),
    new Link('Gifts', 'https://www.thinkgeek.com/gifts/'),
    new Link('Timmy\'s Last Call', 'https://www.thinkgeek.com/interests/timmys-last-call/'),
    new Link('T-Shirts', 'https://www.thinkgeek.com/clothing/t-shirts/'),
    new Link('Collectibles', 'https://www.thinkgeek.com/collectibles/'),
    new Link('Geekpoints', 'https://www.thinkgeek.com/geekpoints/'),
    new Link('On Sale', 'https://www.thinkgeek.com/clearance/on-sale/')
  ]
  constructor() { }

  ngOnInit() {
  }

}
