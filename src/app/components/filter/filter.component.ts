import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  category_id;
  mark_id;
  categories;
  autos;
  models;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getCategory()
      .subscribe(res => {
        this.categories = res;
      });
  }

  getMarks(category_id) {
    this.category_id = category_id;
    this.httpService.getAutoByCategory(category_id)
      .subscribe(res => {
        this.autos = res;
      });
  }

  getModels(mark_id) {
    this.mark_id = mark_id;
    this.httpService.getAutoByModel(mark_id, this.category_id)
      .subscribe(res => {
        this.models = res;
        console.log('models', this.models);
      });
  }

}
