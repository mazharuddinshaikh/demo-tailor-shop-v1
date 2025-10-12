import { inject, Injectable } from '@angular/core';
import { Shop } from '../model/shop';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SHOP_BASE_URL } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private httpClient: HttpClient = inject(HttpClient)

  constructor() { }

  loadShop(userId: string, offset: number, limit: number): Observable<HttpResponse<Shop[]>> {
    let shopListUrl = `${SHOP_BASE_URL}/v1/${userId}/${offset}/${limit}`;
    return this.httpClient.get<Shop[]>(shopListUrl, { observe: 'response' })
  }

  getShopDetails(shopId: string): Observable<HttpResponse<Shop>> {
    let shopDetailUrl = `${SHOP_BASE_URL}/v1/${shopId}`;
    return this.httpClient.get<Shop>(shopDetailUrl, { observe: 'response' })
  }
}
