import { TestBed } from '@angular/core/testing';

import { MonthCalculatorService } from './month-calculator.service';

describe('MonthCalculatorService', () => {
  let service: MonthCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
