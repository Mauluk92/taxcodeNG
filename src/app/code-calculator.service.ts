import { Injectable } from '@angular/core';
import codice_catastale from "../assets/codice_catastale.json"


interface Code {
  place: string,
  code: string
}
@Injectable({
  providedIn: 'root'
})
export class CodeCalculatorService {

  constructor() { }

  public calculateCode(place: string) {
    let codeFinal = ""
    codice_catastale.forEach((el: Code) => {
      if(place.toUpperCase() == el.place){
        codeFinal = el.code;
      }
    } )
    console.log(codeFinal);
    return codeFinal;
  }
}
