import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabRequestListComponent } from './cab-request-list.component';

describe('CabRequestListComponent', () => {
  let component: CabRequestListComponent;
  let fixture: ComponentFixture<CabRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
