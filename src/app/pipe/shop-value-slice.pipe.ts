import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../model/address';

@Pipe({
  name: 'shopValueSlice'
})
export class ShopValueSlicePipe implements PipeTransform {

  transform(value: Address | string, length: number): string {
    if (typeof value === 'string') {
      if (value.length >= length) {
        value = value.substring(0, length) + ' ...';
      } else {
        value = value + ' '.repeat(length - value.length);
      }
      return value;
    } else {
      let addressString = `${value.addressLineOne ?? ''} ${value.addressLineTwo ?? ''} ${value.city ?? ''} ${value.state ?? ''} ${value.zipcode ?? ''}`;
      if (addressString.length >= length) {
        return addressString.substring(0, length) + '...';
      } else {
        return addressString + ' '.repeat(length - addressString.length);
      }
    }
  }

}