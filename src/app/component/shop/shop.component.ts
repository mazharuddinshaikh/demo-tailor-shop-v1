import { Component, OnInit } from '@angular/core';
import { Shop } from '../../model/shop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ShopListComponent } from "../shop-list/shop-list.component";
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../service/shop.service';

@Component({
  selector: 'app-shop',
  imports: [ReactiveFormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {

  public shopId: string = '';
  public shopImageUrl: string = 'no-image.png';
  public shopForm = new FormGroup({
    shopName: new FormControl(''),
    shopCode: new FormControl({ value: '', disabled: true }),
    mobileNumberOne: new FormControl(''),
    mobileNumberTwo: new FormControl(''),
    shopImage: new FormControl(''),
    holiday: new FormControl(''),
    openTime: new FormControl(''),
    closeTime: new FormControl(''),
    shopStatus: new FormControl(''),
    shopAddress: new FormGroup({
      addressLineOne: new FormControl(''),
      addressLineTwo: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl('')
    })
  });
  isShopDetailVisible = true;
  isShopImageVisible = false;
  isShopTimingVisible = false;
  isShopAddressVisible = false;

  constructor(private activatedRoute: ActivatedRoute, private shopService: ShopService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(pathParam => {
      if (pathParam['shopId']) {
        this.shopService.getShopDetails(pathParam['shopId']).subscribe(shopResponse => {
          if (shopResponse.status === 200 && shopResponse.body) {
            this.showShopDetails(shopResponse.body)
          }
        });
      }
    });
    this.activatedRoute.queryParams.subscribe(queryParam => {
      console.log(queryParam['action'])
    })
  }
  // handle shop image
  handleFileInput($event: any): void {
    const file = $event.target.files;
    let shopImageFile = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.shopImageUrl = event.target.result;
    }
    reader.readAsDataURL(shopImageFile);
  }

  public showShopDetails(shop: Shop): void {
    this.updateView(shop);
    this.shopForm.patchValue({
      shopName: shop.shopName,
      shopCode: shop.shopCode,
      mobileNumberOne: shop.mobileNo,
      mobileNumberTwo: shop.alternateMobileNo,
      shopImage: shop.shopImage,
      holiday: shop.holiday,
      openTime: shop.openTime,
      closeTime: shop.closeTime,
      shopStatus: shop.shopStatus,
      shopAddress: {
        addressLineOne: shop?.shopAddress?.addressLineOne,
        addressLineTwo: shop?.shopAddress?.addressLineTwo,
        city: shop?.shopAddress?.city,
        state: shop?.shopAddress?.state,
        zipCode: shop?.shopAddress?.zipcode
      }
    });
    this.shopImageUrl = shop.shopImage ?? 'no-image.png';
  }

  private updateView(shop: Shop): void {
    if (shop.shopImage) {
      this.isShopImageVisible = true;
    }
    if (shop.openTime || shop.closeTime || shop.holiday) {
      this.isShopTimingVisible = true;
    }
    if (shop.shopAddress) {
      this.isShopAddressVisible = true;
    }
  }

  toggleView(viewName: string): void {
    switch (viewName) {
      case 'shopDetail':
        this.isShopDetailVisible = !this.isShopDetailVisible;
        break;
      case 'shopImage':
        this.isShopImageVisible = !this.isShopImageVisible;
        break;
      case 'shopTiming':
        this.isShopTimingVisible = !this.isShopTimingVisible;
        break;
      case 'shopAddress':
        this.isShopAddressVisible = !this.isShopAddressVisible;
        break;
    }
  }
}
