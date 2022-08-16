import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router) { }

  customer: Customer = new Customer();

  ngOnInit(): void {
    this.customer.name = sessionStorage.getItem("name") + '';
    this.customer.phone = sessionStorage.getItem("phone") + '';
  }

  redirection(){
    this.router.navigate(['']);
  }
}
