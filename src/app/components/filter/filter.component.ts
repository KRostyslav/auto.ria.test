import { Component, OnInit } from '@angular/core';

import {HttpService} from '../../services/http.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  categories;
  marks;
  models;
  currentMarkId;
  currentCategoryId;
  currentMark;
  constructor(private _httpService: HttpService,
              private _global: GlobalService) { }

  ngOnInit() {
    this._httpService.getCategory()
      .subscribe(response => {
        this.categories = response;
      });
  }

  /**
   * Method gets marks of auto
   * @param categoryId
   */
  getMarks(categoryId) {
    this.currentCategoryId = categoryId;
    this._httpService.getMarks(this.currentCategoryId)
      .subscribe(response => {
        this.marks = response;
      });
  }

  /**
   * Method gets modeks of auto
   * @param mark
   */
  getModels(mark) {
    this.currentMarkId = mark;
    this.currentMark = mark.name;
    this._httpService.getModels(this.currentMarkId, this.currentCategoryId)
      .subscribe(response => {
        this.models = response;
        this._global.setModels(this.models);
      });
  }

}
