import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl:string="http://localhost:8081/api/customer";
  constructor(private http:HttpClient) { }

  getAllCustomer():Observable<Customer[]>{
      return this.http.get<Customer[]>(this.baseUrl);
  }
  getById(id:number):Observable<Customer>{
    return this.http.get<Customer>(this.baseUrl+"/"+id);
  }
  saveCustomer(cust:Customer){
    return this.http.post(this.baseUrl,cust);
  }
  login(cust:Customer){
    return this.http.post(this.baseUrl+"/login",cust);
  }
}
