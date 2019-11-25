import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabAllocationComponent } from './cab-allocation.component';

describe('CabAllocationComponent', () => {
  let component: CabAllocationComponent;
  let fixture: ComponentFixture<CabAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
