import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustComponent } from './customer/addcust/addcust.component';
import { CustdetailsComponent } from './customer/custdetails/custdetails.component';
import { CustloginComponent } from './customer/custlogin/custlogin.component';
import { ListcustComponent } from './customer/listcust/listcust.component';

const routes: Routes = [
  {path:"custlist",component:ListcustComponent},
  {path:"addcust",component:AddcustComponent},
  {path:"details/:id",component:CustdetailsComponent},
  {path:"login",component:CustloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
