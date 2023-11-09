import { TestBed } from '@angular/core/testing';

import { ControlCodeCalculatorService } from './control-code-calculator.service';

describe('ControlCodeCalculatorService', () => {
  let service: ControlCodeCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlCodeCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
