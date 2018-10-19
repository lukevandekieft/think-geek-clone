import { Component, OnInit } from '@angular/core';

import { Link } from '../models/link-model';

@Component({
  selector: 'app-footer-bar-links',
  templateUrl: './footer-bar-links.component.html',
  styleUrls: ['./footer-bar-links.component.scss']
})
export class FooterBarLinksComponent implements OnInit {
  customerLinks: Link[] = [
    new Link('Returns & Exchanges', 'https://www.thinkgeek.com/help/returns.shtml'),
    new Link('Order Status', 'https://www.thinkgeek.com/brain/account/history.cgi'),
    new Link('Shipping', 'https://www.thinkgeek.com/help/shipping.shtml'),
    new Link('Accounts', 'https://www.thinkgeek.com/help/accounts.shtml'),
    new Link('Ordering', 'https://www.thinkgeek.com/help/ordering.shtml'),
    new Link('Size Charts', 'https://www.thinkgeek.com/help/sizing-info.shtml'),
    new Link('Gift Options', 'https://www.thinkgeek.com/help/gifts.shtml'),
    new Link('Gift Cards', 'https://www.thinkgeek.com/brain/order/certificate.cgi'),
    new Link('Gift Card Balance', 'https://www.thinkgeek.com/brain/order/cert_lookup.cgi'),
    new Link('International Orders', 'https://www.thinkgeek.com/help/shipping.shtml/#international-shipping'),
    new Link('Privacy & Security', 'https://www.thinkgeek.com/help/privacy.shtml'),
    new Link('Terms of Use', 'https://www.thinkgeek.com/help/terms-of-use.shtml')
  ]

  aboutLinks: Link[] = [
    new Link('About Us', 'https://www.thinkgeek.com/about-us/'),
    new Link('Jobs', 'https://careers.thinkgeek.com/'),
    new Link('Our Blog', 'https://www.thinkgeek.com/blog/'),
    new Link('Press', 'https://www.thinkgeek.com/help/news-press.shtml'),
    new Link('Contact Us', 'https://www.thinkgeek.com/help/'),
    new Link('Store Locations', 'https://www.thinkgeek.com/help/store-locations/'),
    new Link('Newsletter', 'https://www.thinkgeek.com/newsletter.shtml'),
    new Link('Volume Purchases', 'https://www.thinkgeek.com/volume/'),
    new Link('Affiliates', 'https://www.thinkgeek.com/affiliates/'),
    new Link('Sitemap', 'https://www.thinkgeek.com/site-index/')
  ]

  darkLinks: Link[] = [
    new Link('Account', 'https://www.thinkgeek.com/brain/account/index.cgi'),
    new Link('Order Management', 'https://www.thinkgeek.com/brain/account/history.cgi'),
    new Link('Geekpoints', 'https://www.thinkgeek.com/geekpoints/'),
    new Link('Forgot Password', 'https://www.thinkgeek.com/brain/account/passwd.cgi'),
    new Link('Wish Lists', 'https://www.thinkgeek.com/brain/wishes.cgi'),
    new Link('Return Requests', 'https://www.thinkgeek.com/rma/'),
    new Link('Address Book', 'https://www.thinkgeek.com/brain/account/address_book.cgi'),
    new Link('Submit Action Shot', 'https://www.thinkgeek.com/action-shots/'),
    new Link('Timmycam', 'https://www.thinkgeek.com/timmycam/')
  ]

  constructor() { }

  ngOnInit() {
  }

}
