import { TestBed } from '@angular/core/testing';

import { EmployeedsService } from './employeeds.service';

describe('EmployeedsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeedsService = TestBed.get(EmployeedsService);
    expect(service).toBeTruthy();
  });
});
