import { Injectable } from '@angular/core';
import {NameCalculatorService} from "./name-calculator.service";
import {SurnameCalculatorService} from "./surname-calculator.service";
import {YearCalculatorService} from "./year-calculator.service";
import {MonthCalculatorService} from "./month-calculator.service";
import {DayCalculatorService} from "./day-calculator.service";
import {CodeCalculatorService} from "./code-calculator.service";
import {ControlCodeCalculatorService} from "./control-code-calculator.service";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private nameCalculator : NameCalculatorService,
              private surnameCalculator: SurnameCalculatorService,
              private yearCalculator: YearCalculatorService,
              private monthCalculator: MonthCalculatorService,
              private dayCalculator: DayCalculatorService,
              private codeCalculator: CodeCalculatorService,
              private controlCodeCalculator: ControlCodeCalculatorService) {
  }

  public calculate(surname:string,
                   name:string,
                   year: string,
                   month: string,
                   day: string,
                   gender: string,
                   place: string) : string {
    const surnameCode: string = this.surnameCalculator.calculateSurnameCode(surname)
    const nameCode : string =  this.nameCalculator.calculateNameCode(name);
    const yearCode : string = this.yearCalculator.calculateYearCode(year);
    const monthCode : string = this.monthCalculator.calculateMonthCode(month)
    const dayCode : string = this.dayCalculator.calculateDayCode(day, gender);
    const code : string = this.codeCalculator.calculateCode(place);
    let taxcode : string = surnameCode + nameCode + yearCode + monthCode + dayCode + code;
    return taxcode  + this.controlCodeCalculator.calculateControlCode(taxcode);
  }
}
