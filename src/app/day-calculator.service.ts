import { Injectable } from '@angular/core';
import month_code from "../assets/month_code.json";

@Injectable({
  providedIn: 'root'
})
export class DayCalculatorService {

  constructor() { }

  public calculateDayCode(day: string, gender: string) {
    return gender == 'M' ? day : (Number(day) + 40).toString();
  }
}
