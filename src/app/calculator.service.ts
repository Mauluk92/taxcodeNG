import { Injectable } from '@angular/core';
import {NameCalculatorService} from "./name-calculator.service";
import {SurnameCalculatorService} from "./surname-calculator.service";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private nameCalculator : NameCalculatorService,
              private surnameCalculator: SurnameCalculatorService) {
  }

  public calculate(surname:string, name:string) : string {
    const surnameCode: string = this.surnameCalculator.calculateSurnameCode(surname)
    const nameCode : string =  this.nameCalculator.calculateNameCode(name);
    return surnameCode + nameCode;
  }
}
