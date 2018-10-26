import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-content-categories',
  templateUrl: './content-categories.component.html',
  styleUrls: ['./content-categories.component.scss'],
  providers: [DatabaseService]
})
export class ContentCategoriesComponent implements OnInit {

  categories: FirebaseListObservable<any[]>;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.categories = this.databaseService.getCategories();
    this.categories.subscribe(res => console.log(res[0]));
  }

}
