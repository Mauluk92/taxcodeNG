import { TestBed } from '@angular/core/testing';

import { NameCalculatorService } from './name-calculator.service';

describe('NameCalculatorService', () => {
  let service: NameCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
