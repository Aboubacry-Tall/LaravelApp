import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private server = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.server + 'customers');
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.server + 'customer', customer);
  }

  getCustomerInfo(id: string): Observable<any> {
    return this.http.get(this.server + 'customers/' + id);
  }

  
}
