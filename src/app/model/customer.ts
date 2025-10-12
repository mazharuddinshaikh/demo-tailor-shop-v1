import { Shop } from "./shop";

export interface Customer {
    customerId?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    mobileNo?: string;
    email?: string;
    createdAt?: string;
    updatedAt?: string;
    shop?: Shop;
}
