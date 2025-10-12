import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  loadCustomer(userId: string, shopId: string, offset: number, limit: number): Customer[] {
    let customerList: Customer[] = [];
    customerList.push({
      firstName: 'mazhar',
      mobileNo: '7030409878',
      shop: {
        shopName: 'mazhar-tailor'
      }
    });
    customerList.push({
      firstName: 'mazhar',
      mobileNo: '7030409878',
      shop: {
        shopName: 'mazhar-tailor'
      }
    });
    customerList.push({
      firstName: 'mazhar',
      mobileNo: '7030409878',
      shop: {
        shopName: 'mazhar-tailor'
      }
    });
    customerList.push({
      firstName: 'mazhar',
      mobileNo: '7030409878',
      shop: {
        shopName: 'mazhar-tailor'
      }
    });
    return customerList;
  }
}
