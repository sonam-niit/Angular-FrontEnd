import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = "http://localhost:8081/api/customer";
  constructor(private http: HttpClient) { }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }
  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + "/" + id);
  }
  saveCustomer(cust: Customer) {
    return this.http.post(this.baseUrl, cust).pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(errorMsg);
      })
    );
  }
  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }

  login(cust: Customer) {
    return this.http.post(this.baseUrl + "/login", cust).pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(errorMsg);
      })
    );;
  }
}
