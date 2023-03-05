import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-custlogin',
  templateUrl: './custlogin.component.html',
  styleUrls: ['./custlogin.component.css']
})
export class CustloginComponent {

  customer:Customer= new Customer();

  constructor(private service:CustomerService,private router:Router){}
  onSubmit(){
    this.service.login(this.customer).subscribe(resp=>{
      console.log(resp)
    });
    
    this.router.navigate(['dashboard']);
  }
}
