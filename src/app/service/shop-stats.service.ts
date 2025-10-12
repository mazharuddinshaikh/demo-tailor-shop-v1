import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STATS_BASE_URL } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class ShopStatsService {
private httpClient: HttpClient = inject(HttpClient);
  constructor() { }

  loadstats(userId: string): Observable<any> {
    
    let statsUrl = `${STATS_BASE_URL}/v1/${userId}`;
    return this.httpClient.get(statsUrl, {observe: 'response'});
  }
}
