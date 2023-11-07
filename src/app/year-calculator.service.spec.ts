import { TestBed } from '@angular/core/testing';

import { YearCalculatorService } from './year-calculator.service';

describe('YearCalculatorService', () => {
  let service: YearCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
