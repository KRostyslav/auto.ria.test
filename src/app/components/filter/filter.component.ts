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
  currentCategoryId; currentMark;
  constructor(private httpService: HttpService,
              private global: GlobalService) { }

  ngOnInit() {
    this.httpService.getCategory()
      .subscribe(res => {
        this.categories = res;
      });
  }

  getMarks(categoryId) {
    this.currentCategoryId = categoryId;
    this.httpService.getAutoByCategory(this.currentCategoryId)
      .subscribe(res => {
        this.marks = res;
      });
  }

  getModels(mark, mark1) {
    console.log('mark', mark);
    console.log('mark', mark1);
    console.log('mark1', mark.category_id);
    console.log('mark2', mark.country_id);
    console.log('mark3', mark.eng);
    console.log('mark4', mark.marka_id);
    console.log('mark5', mark.name);

    this.currentMarkId = mark;
    this.currentMark = mark.name;
    this.httpService.getAutoByModel(this.currentMarkId, this.currentCategoryId)
      .subscribe(res => {
        this.models = res;
        this.global.setModels(this.models);
        console.log('models', this.models);
      });
  }

}
