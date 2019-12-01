import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';



export interface Food {
  value: string;
  viewValue: string;
}


export interface PeriodicElement {
  date: string;
  name: string;
  gender: string;
  empId: string;
  shiftTime: string;
  area: string;
  trip: string;
  landmark: string;
  route: string;
 phone: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {date: '05-12-2019', name: 'Mike', gender: 'male', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '06-12-2019', name: 'Shawn', gender: 'male', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '05-12-2019', name: 'Mendez', gender: 'female', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '12-12-2019', name: 'Joseph', gender: 'female', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R2', phone: '9840578890'},
  {date: '07-12-2019', name: 'Joshua', gender: 'female', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '05-12-2019', name: 'Tharun', gender: 'female', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '05-12-2019', name: 'Robin', gender: 'male', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '05-12-2019', name: 'Jeniffer', gender: 'male', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '05-12-2019', name: 'Mosh', gender: 'male', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '05-12-2019', name: 'Shwarmuller', gender: 'male', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '05-12-2019', name: 'Jamie', gender: 'male', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '05-12-2019', name: 'Mercury', gender: 'male', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '05-12-2019', name: 'Miller', gender: 'male', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'},
  {date: '05-12-2019', name: 'Thahir', gender: 'male', empId: '7124', shiftTime: '12:00-21:00',area: 'Pursaiwalkam', trip: 'Pickup',
  landmark: 'Opp Saravana stores', route: 'R1', phone: '9840578890'}

];



@Component({
  selector: 'app-address-approval',
  templateUrl: './address-approval.component.html',
  styleUrls: ['./address-approval.component.css']
})
export class AddressApprovalComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['select', 'date', 'name', 'gender', 'empID', 'shiftTime', 'area', 'trip', 'landmark', 'route', 'phone'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

}
