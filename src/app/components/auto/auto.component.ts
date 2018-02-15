import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {Subscription} from 'rxjs/Subscription';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: [ './auto.component.scss' ]
})
export class AutoComponent implements OnInit {

  models;
  filtersModels;
  nameOfModel;
  averagePrice;
  private _subscription: Subscription = null;

  constructor( private _global: GlobalService,
               private _httpService: HttpService ) {
  }

  ngOnInit() {
    this._subscription = this._global.currentModels
      .subscribe(models => {
        this.models = models;
        this.filtersModels = models;
      });
  }

  getAvaregePrice( modelId, markaId ) {
    this._httpService.getAveragePrice(modelId, markaId)
      .subscribe(res => {
        this.averagePrice = res['arithmeticMean'];
      });
  }

  searchModel() {
    const strModel = this.nameOfModel;
    this.filtersModels = this.models.filter(function ( model ) {
      return model.name.toLowerCase().includes(strModel);
    });

  }

}
