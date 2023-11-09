import { Injectable } from '@angular/core';
import codice_odd from "../assets/controls_odd.json"
import codice_even from "../assets/controls_even.json"


interface ControlChar {
  char: string,
  controlNumber: string
}
@Injectable({
  providedIn: 'root'
})
export class ControlCodeCalculatorService {
  controlLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  constructor() { }

  public calculateControlCode(taxCode: string) {
    const chars : string[] = [...taxCode]
    let controlNumber : number = 0;
    for(let i = 0; i < chars.length; i++){
      let controlSum : number = 0;
      if(i % 2  == 0){

        codice_even.forEach( (el : ControlChar) => {
          if(chars[i] === el.char){
            controlSum = Number(el.controlNumber);
          }
        })
      }else{
        codice_odd.forEach( (el: ControlChar) => {
         if(chars[i] === el.char){
           controlSum = Number(el.controlNumber);
         }
        })
      }
      controlNumber += controlSum;
    }
    return this.controlLetters[controlNumber%26];
  }
}
