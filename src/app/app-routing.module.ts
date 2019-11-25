import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HomeComponent } from './home/home.component';
import { AddressApprovalComponent } from './cab-request/address-approval/address-approval.component';
import { TripDetailsComponent } from './cab-request/trip-details/trip-details.component';
import { CabRequestListComponent } from './cab-request/cab-request-list/cab-request-list.component';
import { CabRequestComponent } from './cab-request/cab-request.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabAllocationComponent } from './cab-request/cab-allocation/cab-allocation.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'bootstrap', component: BootstrapComponent, pathMatch: 'full'},
  { path: 'cab-request', component: CabRequestComponent,
  pathMatch: 'full',
   children:[
     {
      path: '', component: CabRequestListComponent
     },
     {
      path: 'cab-allocation', component: CabAllocationComponent
     },
     {
      path: 'trip-details', component: TripDetailsComponent
     },
     {
      path: 'address-approval', component: AddressApprovalComponent
     }
   ]
},
{
  path: '**',
  pathMatch: 'full',
  redirectTo: '/home'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
