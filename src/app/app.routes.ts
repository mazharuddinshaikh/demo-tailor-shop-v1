import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'shop/:shopId',
        pathMatch: 'full',
        loadComponent: () => import('./component/shop/shop.component').then(com => com.ShopComponent)
    },
    {
        path: 'shop',
        pathMatch: 'full',
        loadComponent: () => import('./component/shop/shop.component').then(com => com.ShopComponent)
    },
    {
        path: 'customer/:customerId',
        pathMatch: 'full',
        loadComponent: () => import('./component/customer/customer.component').then(com => com.CustomerComponent)
    },
    {
        path: 'customer',
        pathMatch: 'full',
        loadComponent: () => import('./component/customer/customer.component').then(com => com.CustomerComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./component/dashboard/dashboard.component').then(com => com.DashboardComponent)
    }

    // ,
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     loadComponent: () => import('./component/shop/shop.component').then(com => com.ShopComponent)
    // }
];
