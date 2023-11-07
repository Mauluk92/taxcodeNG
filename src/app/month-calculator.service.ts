import { Injectable } from '@angular/core';
import month_code from "../assets/month_code.json"


interface MonthCode {
  month: string,
  code: string
}
@Injectable({
  providedIn: 'root'
})
export class MonthCalculatorService {

  constructor() { }

  public calculateMonthCode(month: string) {
    let monthCodeFinal = ""
      month_code.forEach((el: MonthCode) => {
        if(month == el.month){
          monthCodeFinal = el.code;
        }
      } )
    return monthCodeFinal;
  }
}
