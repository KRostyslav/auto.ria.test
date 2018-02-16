import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {GlobalService} from '../../services/global.service';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: [ './auto.component.scss' ]
})
export class AutoComponent implements OnInit {

  modelName;
  nameOfModel;
  models = [];
  filtersModels;
  averagePrice;
  showDialog;

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

  /**
   * Method which open model, get average price of model
   * @param modelId
   * @param markaId
   * @param modelName
   */
  getAveragePrice( modelId, markaId, modelName ) {
    this.modelName = modelName;
    this.showDialog = !this.showDialog;
    this._httpService.getAveragePrice(modelId, markaId)
      .subscribe(respone => {
        this.averagePrice = respone[ 'arithmeticMean' ];
      });
  }

  /**
   * Method search model in array of models and set new array which shows
   */
  searchModel() {
    const strModel = this.nameOfModel;
    this.filtersModels = this.models.filter(function ( model ) {
      return model.name.toLowerCase().includes(strModel);
    });

  }

}
