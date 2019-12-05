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


export interface PeriodicElement {
  name: string;
  gender: string;
  empId: string;
  shiftTime: string;
  area: string;
  landmark: string;
  route: string;
  geoCode: string;

}


const ELEMENT_DATA: PeriodicElement[] =[{"name":"Mike","gender":"male","empId":"7124",
"shiftTime":"12:00-21:00","area":"Pursaiwalkam","landmark":"Opp Saravana stores","route":"R1"},
{"name":"Shawn","gender":"male","empId":"7124","shiftTime":"12:00-21:00","area":"Pursaiwalkam",
"landmark":"Opp Saravana stores","route":"R1"},{"name":"Mendez","gender":"female","empId":"7124",
"shiftTime":"12:00-21:00","area":"Pursaiwalkam","landmark":"Opp Saravana stores","route":"R1"},
{"name":"Joseph","gender":"female","empId":"7124","shiftTime":"12:00-21:00","area":"Pursaiwalkam",
"landmark":"Opp Saravana stores","route":"R2"},{"name":"Joshua","gender":"female","empId":"7124",
"shiftTime":"12:00-21:00","area":"Pursaiwalkam","landmark":"Opp Saravana stores","route":"R1"},
{"name":"Tharun","gender":"female","empId":"7124","shiftTime":"12:00-21:00","area":"Pursaiwalkam",
"landmark":"Opp Saravana stores","route":"R1"},{"name":"Robin","gender":"male","empId":"7124",
"shiftTime":"12:00-21:00","area":"Pursaiwalkam","landmark":"Opp Saravana stores","route":"R1"},
{"name":"Jeniffer","gender":"male","empId":"7124","shiftTime":"12:00-21:00","area":"Pursaiwalkam",
"landmark":"Opp Saravana stores","route":"R1"},
{"name":"Mosh","gender":"male","empId":"7124","shiftTime":"12:00-21:00","area":"Pursaiwalkam",
"landmark":"Opp Saravana stores","route":"R1"},{"name":"Shwarmuller","gender":"male","empId":"7124",
"shiftTime":"12:00-21:00","area":"Pursaiwalkam","landmark":"Opp Saravana stores","route":"R1"},
{"name":"Jamie","gender":"male","empId":"7124","shiftTime":"12:00-21:00","area":"Pursaiwalkam",
"landmark":"Opp Saravana stores","route":"R1"},{"name":"Mercury","gender":"male","empId":"7124",
"shiftTime":"12:00-21:00","area":"Pursaiwalkam","landmark":"Opp Saravana stores","route":"R1"},
{"name":"Miller","gender":"male","empId":"7124","shiftTime":"12:00-21:00","area":"Pursaiwalkam",
"landmark":"Opp Saravana stores","route":"R1"},{"name":"Thahir","gender":"male","empId":"7124",
"shiftTime":"12:00-21:00","area":"Pursaiwalkam","landmark":"Opp Saravana stores","route":"R1"}];



@Component({
  selector: 'app-cab-details',
  templateUrl: './cab-details.component.html',
  styleUrls: ['./cab-details.component.css']
})
export class CabDetailsComponent implements OnInit {




  constructor(private router: Router) { }


  driversList: string [];
  displayedColumns: string[] = ['select','s_no' , 'name', 'gender', 'empID', 'shiftTime', 'area', 'trip', 'landmark', 'route', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.driversList = [
      "Michael",
      "Tait"
    ];
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


viewCabDetails() {
    this.router.navigate(['/cab-request/cab-details'])
  }

}
