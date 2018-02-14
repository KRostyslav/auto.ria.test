import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories;
  category_id;
  mark_id;
  // categories;
  autos;
  models;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getCategory()
      .subscribe(res => {
        this.categories = res;
      });
  }

  getMarks(category_id) {
    console.log('YES!', category_id);
    this.category_id = category_id;
    this.httpService.getAutoByCategory(category_id)
      .subscribe(res => {
        this.autos = res;
      });
  }
}
