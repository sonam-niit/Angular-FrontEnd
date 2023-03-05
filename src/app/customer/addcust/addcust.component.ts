import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-addcust',
  templateUrl: './addcust.component.html',
  styleUrls: ['./addcust.component.css']
})
export class AddcustComponent {

  customer:Customer= new Customer();

  constructor(private service:CustomerService,private router:Router){}
  onSubmit(){
    this.service.saveCustomer(this.customer).subscribe(x=>console.log(x));
    alert("user Added successfully")
    this.router.navigate(['custlist']);
  }
}
