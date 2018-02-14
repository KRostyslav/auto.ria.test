import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  private _apiKey = '';
  private _apiUrl = 'http://api.auto.ria.com/';
  private _newApiUrl = 'https://developers.ria.com/auto/';

  constructor( private _httpClient: HttpClient ) { }

  getCategory() {
    return this._httpClient.get(this._apiUrl + 'categories');
  }

  getAutoByCategory( category_id: number ) {
    return this._httpClient.get(this._newApiUrl + 'new/marks?category_id=' + category_id + '&api_key=' + this._apiKey);
  }

  getAutoByModel( mark_id: number, category_id: number ) {
    return this._httpClient
      .get(this._newApiUrl + 'new/models?marka_id=' + mark_id + '&category_id=' + category_id + '&api_key=' + this._apiKey);
  }
}
