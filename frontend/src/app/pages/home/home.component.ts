import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: ServiceService, private router: Router) {}

  customer: Customer = new Customer();
  customers!: Customer[];

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.service.getAllCustomers().subscribe(
      (data) => {
        this.customers = data;
      },
      (error) => console.log(error)
    );
  }

  addCustomer() {
    if(this.customer.name == '' || this.customer.name == undefined || this.customer.phone == undefined){
      
    }else{
      this.service.addCustomer(this.customer).subscribe(
        (data) => {
          this.customer = data;
        },
        (error) => console.log(error)
      );
      sessionStorage.setItem('name', this.customer.name + '');
      sessionStorage.setItem('phone', this.customer.phone + '');
      this.router.navigate(['customer/' + this.customer.phone]);
    }
  }
}
