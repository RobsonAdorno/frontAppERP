import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedsComponent } from './employeeds.component';

describe('EmployeedsComponent', () => {
  let component: EmployeedsComponent;
  let fixture: ComponentFixture<EmployeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
