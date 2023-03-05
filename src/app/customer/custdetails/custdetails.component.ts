import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-custdetails',
  templateUrl: './custdetails.component.html',
  styleUrls: ['./custdetails.component.css']
})
export class CustdetailsComponent {

  cust:Customer;
  constructor(private service:CustomerService,private actRoute:ActivatedRoute){}

  ngOnInit(){
    const id= this.actRoute.snapshot.paramMap.get("id");
    this.service.getById(Number(id)).subscribe(x=>this.cust=x);
  }
}
