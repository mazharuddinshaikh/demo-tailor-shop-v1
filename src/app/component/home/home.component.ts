import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Shop } from '../../model/shop';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public dummyShopList: Shop[] = [];
  public responsiveOptions:any[] = [];

  ngOnInit(): void {
    this.initializeDymmyShopList();
  }

  initializeDymmyShopList(): void {
    this.dummyShopList.push({
      shopName: "Azhar master tailor",
      mobileNo: "+91-9999999999",
      shopImage: "app-icon.png"
    })
    this.dummyShopList.push({
      shopName: "Azhar master tailor",
      mobileNo: "+91-9999999999",
      shopImage: "app-icon.png"
    })
    this.dummyShopList.push({
      shopName: "Azhar master tailor",
      mobileNo: "+91-9999999999",
      shopImage: "app-icon.png"
    })
    this.dummyShopList.push({
      shopName: "Azhar master tailor",
      mobileNo: "+91-9999999999",
      shopImage: "app-icon.png"
    })
    this.dummyShopList.push({
      shopName: "Azhar master tailor",
      mobileNo: "+91-9999999999",
      shopImage: "app-icon.png"
    })
    this.dummyShopList.push({
      shopName: "Azhar master tailor",
      mobileNo: "+91-9999999999",
      shopImage: "app-icon.png"
    })
    this.dummyShopList.push({
      shopName: "Azhar master tailor",
      mobileNo: "+91-9999999999",
      shopImage: "app-icon.png"
    })
  }

  initializeResponseiveOptions(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
      }
  ]
  }
}
