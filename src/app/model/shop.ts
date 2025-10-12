import { Address } from "./address";

export interface Shop {
    shopId?: string;
    shopName?: string;
    shopCode?: string;
    mobileNo?: string;
    alternateMobileNo?: string;
    shopImage?: string;
    openTime?: string;
    closeTime?: string;
    holiday?: string;
    shopAddress?: Address;
    shopStatus?: string;
    createdAt?: string;
    updatedAt?: string;
}
