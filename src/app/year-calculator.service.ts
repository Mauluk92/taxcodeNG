import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YearCalculatorService {

  constructor() { }

  public calculateYearCode(year: string) {
    return year.substring(2);
  }
}
