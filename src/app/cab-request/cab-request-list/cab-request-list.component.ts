import { Component, OnInit } from '@angular/core';


export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-cab-request-list',
  templateUrl: './cab-request-list.component.html',
  styleUrls: ['./cab-request-list.component.css']
})



export class CabRequestListComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    console.log('triggered-----------')
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}
