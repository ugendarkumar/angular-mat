import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CabRequestComponent } from './cab-request/cab-request.component';
import { CabRequestListComponent } from './cab-request/cab-request-list/cab-request-list.component';
import { CabAllocationComponent } from './cab-request/cab-allocation/cab-allocation.component';
import { TripDetailsComponent } from './cab-request/trip-details/trip-details.component';
import { AddressApprovalComponent } from './cab-request/address-approval/address-approval.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CabRequestComponent,
    CabRequestListComponent,
    CabAllocationComponent,
    TripDetailsComponent,
    AddressApprovalComponent,
    HomeComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
