import { TestBed } from '@angular/core/testing';

import { DayCalculatorService } from './day-calculator.service';

describe('DayCalculatorService', () => {
  let service: DayCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
