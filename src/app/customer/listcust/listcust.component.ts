import { Component } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-listcust',
  templateUrl: './listcust.component.html',
  styleUrls: ['./listcust.component.css']
})
export class ListcustComponent {

  customers:Customer[];
  constructor(private service:CustomerService){}
  ngOnInit(){
    this.service.getAllCustomer().subscribe(ob=>this.customers=ob)
  }
}
