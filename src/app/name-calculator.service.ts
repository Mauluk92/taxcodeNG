import {Injectable} from '@angular/core';

/**
 * This service calculates
 * the second three letters of the tax code,
 * associated with the name
 */
@Injectable({
  providedIn: 'root'
})
export class NameCalculatorService {
  constructor() {
  }

  private vowelList: string[] = ["A", "E", "I", "O", "U", "Y"]

  public calculateNameCode(name: string) {
    const nameModified = name.trim().toUpperCase();
    let nameCode: string = "";
    let vowels: string[] = [];
    let consonants: string[] = [];
    for (let charPos = 0; charPos < nameModified.length; charPos++ ) {
      if (!this.vowelList.includes(nameModified.charAt(charPos))) {
        consonants.push(nameModified.charAt(charPos));
      } else {
        vowels.unshift(nameModified.charAt(charPos));
      }
    }
    vowels.push("X", "X")
    const consonants_vowels = [...consonants]
    consonants_vowels.push(...vowels);
    while (nameCode.length < 3) {
      if(consonants.length > 3){
        nameCode = consonants[0] + consonants[2] + consonants[3]
      }else {
        nameCode += consonants.shift();
      }
    }
    return nameCode.toUpperCase();
  }
}
