import { Injectable } from '@angular/core';
import { DressStats } from '../model/dress-stats';

@Injectable({
  providedIn: 'root'
})
export class DressStatsService {

  constructor() { }

  loadDress(): DressStats[] {
    let dressStatsList: DressStats[] = [];
    dressStatsList.push({
      orderDate: '2025-01-19',
      dressCount: 4,
      shopName: 'mazhar-tailor'
    });
    dressStatsList.push({
      orderDate: '2025-01-19',
      dressCount: 4,
      shopName: 'mazhar-tailor'
    });
    return dressStatsList;
  }
}
