import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcustComponent } from './customer/listcust/listcust.component';
import { AddcustComponent } from './customer/addcust/addcust.component';
import { FormsModule } from '@angular/forms';
import { CustdetailsComponent } from './customer/custdetails/custdetails.component';
import { CustloginComponent } from './customer/custlogin/custlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    ListcustComponent,
    AddcustComponent,
    CustdetailsComponent,
    CustloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
