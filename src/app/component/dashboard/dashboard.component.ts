import { Component, inject, OnInit } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { ShopListComponent } from '../shop-list/shop-list.component';
import { RouterLink } from '@angular/router';
import { ShopStatsService } from '../../service/shop-stats.service';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { DressListComponent } from '../dress-list/dress-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [NgComponentOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  loadedComponent: any;
  shopStatsService: ShopStatsService = inject(ShopStatsService);
  stats = {
    shopCount: 0,
    customerCount: 0,
    dressCount: 0
  }


  ngOnInit(): void {
    this.loadStatsData();
  }
  public updateVisibleComponent(componentName: string) {
    switch (componentName) {
      case 'shopList':
        this.loadedComponent = ShopListComponent;
        break;
      case 'customerList':
        this.loadedComponent = CustomerListComponent;
        break;
      case 'dressStatsList':
        this.loadedComponent = DressListComponent;
        break;
    }
  }

  private loadStatsData(): void {
    const userId = 'DTS_USR_20241128_072630'// + '645/54';
    this.shopStatsService.loadstats(userId).subscribe(resp => {
      if (resp.status === 200) {
        this.stats.shopCount = resp.body.shopCount;
        this.stats.customerCount = resp.body.customerCount;
        this.stats.dressCount = resp.body.dressCount;
      }
    });
  }

}
