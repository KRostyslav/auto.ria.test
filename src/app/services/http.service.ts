import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  private _apiKey = process.env.API_KEY;
  private _newApiUrl = process.env.API_URL;

  constructor( private _httpClient: HttpClient ) { }

  getCategory() {
    return this._httpClient.get(this._newApiUrl + 'categories');
  }

  getAutoByCategory( category_id: number ) {
    return this._httpClient.get(this._newApiUrl + 'new/marks?category_id=' + category_id + '&api_key=' + this._apiKey);
  }

  getAutoByModel( mark_id: number, category_id: number ) {
    return this._httpClient
      .get(this._newApiUrl + 'new/models?marka_id=' + mark_id + '&category_id=' + category_id + '&api_key=' + this._apiKey);
  }

  getAveragePricegetAveragePrice( model_id: number, mark_id: number ) {
    return this._httpClient
      .get(this._newApiUrl + 'average_price?api_key=' + this._apiKey + '&marka_id=' + mark_id + '&model_id=' + model_id);
  }

  searchModel( model ) {
    return this._httpClient.get(this._newApiUrl + 'search?model_id=' + model + '&api_key=' + this._apiKey);
  }
}
