import { Component, OnInit } from '@angular/core';
import { Shop } from '../../model/shop';
import { ShopService } from '../../service/shop.service';
import { Router, RouterLink } from '@angular/router';
import { ShopValueSlicePipe } from '../../pipe/shop-value-slice.pipe';

@Component({
  selector: 'app-shop-list',
  imports: [RouterLink, ShopValueSlicePipe],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css'
})
export class ShopListComponent implements OnInit {
  shopList: Array<Shop> = [];
  constructor(private router: Router, private shopService: ShopService) {
  }
  ngOnInit(): void {
    this.loadDress();
  }
  public loadDress(): void {
    let userId = 'DTS_USR_20241128_072630';
    this.shopService.loadShop(userId, 0, 10).subscribe(resp => {
      if (resp.status === 200) {
        console.log(typeof resp.body);
        if (resp.body !== null) {
          for (const shop of resp.body) {
            this.shopList.push(shop);
          }
        }
      }

    });
  }
  public redirectToShopDetails(shopId: string): void {
    console.log('shop clicked ' + shopId);
    this.router.navigateByUrl('/shop/' + shopId);
  }
}
