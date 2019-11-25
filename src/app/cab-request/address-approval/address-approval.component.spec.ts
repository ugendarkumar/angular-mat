import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressApprovalComponent } from './address-approval.component';

describe('AddressApprovalComponent', () => {
  let component: AddressApprovalComponent;
  let fixture: ComponentFixture<AddressApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
