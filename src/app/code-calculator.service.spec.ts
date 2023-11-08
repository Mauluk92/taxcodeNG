import { TestBed } from '@angular/core/testing';

import { CodeCalculatorService } from './code-calculator.service';

describe('CodeCalculatorService', () => {
  let service: CodeCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
