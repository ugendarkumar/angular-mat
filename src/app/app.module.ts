import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSortModule} from '@angular/material/sort';

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
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule, MatFormFieldModule, MatNativeDateModule, MatCheckboxModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TripHistoryComponent } from './cab-request/trip-details/trip-history/trip-history.component';


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
    BootstrapComponent,
    TripHistoryComponent
  ],
  imports: [
    FormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserModule,
    MatSortModule,
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
