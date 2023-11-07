import { Injectable } from '@angular/core';
import {NameCalculatorService} from "./name-calculator.service";
import {SurnameCalculatorService} from "./surname-calculator.service";
import {YearCalculatorService} from "./year-calculator.service";
import {MonthCalculatorService} from "./month-calculator.service";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private nameCalculator : NameCalculatorService,
              private surnameCalculator: SurnameCalculatorService,
              private yearCalculator: YearCalculatorService,
              private monthCalculator: MonthCalculatorService) {
  }

  public calculate(surname:string, name:string, year: string, month: string) : string {
    const surnameCode: string = this.surnameCalculator.calculateSurnameCode(surname)
    const nameCode : string =  this.nameCalculator.calculateNameCode(name);
    const yearCode : string = this.yearCalculator.calculateYearCode(year);
    const monthCode : string = this.monthCalculator.calculateMonthCode(month)
    return surnameCode + nameCode + yearCode + monthCode;
  }
}
