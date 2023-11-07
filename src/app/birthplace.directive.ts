import {AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn} from "@angular/forms";
import codice_catastale from "../assets/codice_catastale.json";


interface DataCode {
  place: string,
  code: string
}

export function birthplaceValidator(): ValidatorFn {
  return (control: AbstractControl<string>):
    ValidationErrors | null => {
    let error = true;
    codice_catastale.forEach((el : DataCode) => {
      if (control.value.toUpperCase() === el.place) {
        error = false;
      }
    })
  return error ? {
    incorrectPlace: true
  } : null;

}
}
