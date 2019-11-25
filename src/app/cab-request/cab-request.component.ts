import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cab-request',
  templateUrl: './cab-request.component.html',
  styleUrls: ['./cab-request.component.css']
})
export class CabRequestComponent implements OnInit, AfterViewInit {

  @ViewChild('tabGroup', {static: false} ) tabGroup;

  selectedTab: number;

  constructor(private router: Router) { }


  ngAfterViewInit() {
    console.log('afterViewInit => ', this.tabGroup.selectedIndex);
    this.selectedTab = this.tabGroup.selectedIndex;
    this.router.navigate(['/cab-request']);
  }

  ngOnInit() {
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
    this.selectedTab =  tabChangeEvent.index;
  }

}
