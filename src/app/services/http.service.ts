import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {

  private _apiKey = environment.apiKey;
  private _newApiUrl = environment.apiUrl;

  constructor( private _httpClient: HttpClient ) { }

  /**
   * HTTP request for get Categories of auto from AUTO.RIA API
   * @returns {Observable<Object>}
   */
  getCategory() {
    return this._httpClient.get(this._newApiUrl + 'categories/?api_key=' + this._apiKey);
  }

  /**
   * HTTP request for get marks of auto from AUTO.RIA API
   * @param {number} category_id
   * @returns {Observable<Object>}
   */
  getMarks( category_id: number ) {
    return this._httpClient.get(this._newApiUrl + 'new/marks?category_id=' + category_id + '&api_key=' + this._apiKey);
  }

  /**
   * HTTP request for get models of auto from AUTO.RIA API
   * @param {number} mark_id
   * @param {number} category_id
   * @returns {Observable<Object>}
   */
  getModels( mark_id: number, category_id: number ) {
    return this._httpClient
      .get(this._newApiUrl + 'new/models?marka_id=' + mark_id + '&category_id=' + category_id + '&api_key=' + this._apiKey);
  }

  /**
   * HTTP request for get average price of model from AUTO.RIA API
   * @param {number} model_id
   * @param {number} mark_id
   * @returns {Observable<Object>}
   */
  getAveragePrice( model_id: number, mark_id: number ) {
    return this._httpClient
      .get(this._newApiUrl + 'average_price?api_key=' + this._apiKey + '&marka_id=' + mark_id + '&model_id=' + model_id);
  }


  /**
   * HTTP request for search model from AUTO.RIA API
   * @param {number} model_id
   * @returns {Observable<Object>}
   */
  searchModel( model_id: number ) {
    return this._httpClient.get(this._newApiUrl + 'search?model_id=' + model_id + '&api_key=' + this._apiKey);
  }
}
