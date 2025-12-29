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
        path: 'signup',
        pathMatch: 'full',
        loadComponent: () => import('./component/signup/signup.component').then(com => com.SignupComponent)
    },
    {
        path: 'signin',
        pathMatch: 'full',
        loadComponent: () => import('./component/signin/signin.component').then(com => com.SigninComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./component/dashboard/dashboard.component').then(com => com.DashboardComponent)
    }
];
