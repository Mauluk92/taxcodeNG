import { TestBed } from '@angular/core/testing';

import { SurnameCalculatorService } from './surname-calculator.service';

describe('SurnameCalculatorService', () => {
  let service: SurnameCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurnameCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
