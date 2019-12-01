import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {Router} from '@angular/router';

export interface Food {
  value: string;
  viewValue: string;
}


export interface TripDetails {
  date: string;
  pickupTime: string;
  area: string;
  trip: string;
  route: string;
  approvedKms: string;
  cabNo: string;
  tripSheetNo: string;
   cabType: string;
   driverName: string;
   driverContact: string;

}

const ELEMENT_DATA: TripDetails[] = [
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R2', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Andrew Brown', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  },
  {
    date: '05-12-2019', area: 'Anna nagar', route: 'R3', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Joshua Brown', driverContact: '9810984756', cabNo: 'TN 05 U6919', tripSheetNo: '12002',
    approvedKms: '1291'
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R2', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Andrew Brown', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R2', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Andrew Brown', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R2', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Andrew Brown', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R2', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Andrew Brown', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R2', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Andrew Brown', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R3', cabType: '4 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Kevin', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R4', cabType: '6 Seat', pickupTime: '21:45', trip: 'Drop',
    driverName: 'John', driverContact: '9840984756', cabNo: 'TN 05 U6149', tripSheetNo: '7997',
    approvedKms: '34'
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R5', cabType: '6 Seat', pickupTime: '22:30', trip: 'Drop',
    driverName: 'Nelson', driverContact: '9830984756', cabNo: 'TN 05 U2949', tripSheetNo: '7907',
    approvedKms: '6799'
  },
  {
    date: '05-12-2019', area: 'Mount Road', route: 'R6', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Mark tye', driverContact: '9800984756', cabNo: 'TN 05 U8949', tripSheetNo: '3468',
    approvedKms: '78'
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R2', cabType: '6 Seat', pickupTime: '22:30', trip: 'Drop',
    driverName: 'Andrew Brown', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R2', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Andrew Brown', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R2', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Andrew Brown', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R2', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Andrew Brown', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  },
  {
    date: '05-12-2019', area: 'Pursaiwalkam', route: 'R2', cabType: '6 Seat', pickupTime: '21:30', trip: 'Drop',
    driverName: 'Andrew Brown', driverContact: '9840984756', cabNo: 'TN 05 U6949', tripSheetNo: '',
    approvedKms: ''
  }

];

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

isEditable = true;
editButtonText = 'Edit Trip Details';
editIcon = 'edit';
  constructor(private router: Router) { }

  displayedColumns: string[] = ['select', 'date', 'area', 'route',
  'cabType', 'pickupTime', 'trip', 'driverName', 'driverContact', 'cabNo', 'tripsheetNo', 'approvedKms', 'action'];
  dataSource = new MatTableDataSource<TripDetails>(ELEMENT_DATA);
  selection = new SelectionModel<TripDetails>(true, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  editTripDetails(){
    this.isEditable = false;
    this.editButtonText = 'Save Tripsheet Details';
    this.editIcon = 'save';
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }


  viewHistory(){
    this.router.navigate(['/cab-request/trip-history'])
  }


}
