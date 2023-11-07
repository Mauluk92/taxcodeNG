import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurnameCalculatorService {

  constructor() { }

  private vowelList: string[] = ["A", "E", "I", "O", "U", "Y"]

  public calculateSurnameCode(surname: string) {
    const surnameModified = surname.trim().toUpperCase();
    let nameCode: string = "";
    let vowels: string[] = [];
    let consonants: string[] = [];
    for (let charPos = 0; charPos < surnameModified.length; charPos++ ) {
      if (!this.vowelList.includes(surnameModified.charAt(charPos))) {
        consonants.push(surnameModified.charAt(charPos));
      } else {
        vowels.unshift(surnameModified.charAt(charPos));
      }
    }
    vowels.push("X", "X")
    const consonants_vowels = [...consonants]
    consonants_vowels.push(...vowels);
    while (nameCode.length < 3) {
        nameCode += consonants.shift();
      }
    return nameCode.toUpperCase();
  }
}
