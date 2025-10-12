import { Component, inject, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customer.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  imports: [RouterLink],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customerService: CustomerService = inject(CustomerService);
  customerList: Customer[] = [];
  ngOnInit(): void {
    this.loadCustomer();
  }
  loadCustomer(): void {
    this.customerService.loadCustomer('', '', 0, 0).forEach(customer => this.customerList.push(customer));
  }
}
