import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';
import {Router} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-cab-request',
  templateUrl: './cab-request.component.html',
  styleUrls: ['./cab-request.component.css']
})
export class CabRequestComponent implements OnInit, AfterViewInit {


  navLinks: any[];
  activeLinkIndex = -1;

  @ViewChild('tabGroup', {static: false} ) tabGroup;

  selectedTab: number;

  constructor(private router: Router) {
    this.navLinks = [
      {
          label: 'Cab Request List',
          link: '/cab-request/cab-request-list',
          index: 0
      }, {
          label: 'Cab Allocation',
          link: '/cab-request/cab-allocation',
          index: 1
      }, {
          label: 'Trip Details',
          link: '/cab-request/trip-details',
          index: 2
      },
      {
        label: 'Address approval',
        link: '/cab-request/address-approval',
        index: 3
    },
    {
      label: 'Address approval',
      link: '/cab-request/cab-details',
      index: 1
  }
  ];
  }


  ngAfterViewInit() {
 //   console.log('afterViewInit => ', this.tabGroup.selectedIndex);
    }

  ngOnInit(): void {

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
    this.selectedTab =  tabChangeEvent.index;
  }


// win.document.attachEvent('oncontextmenu', function () {
//   window.event.returnValue = false;
// });

  }


