import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function dateValidator() : ValidatorFn { return (control: AbstractControl<string>):
  ValidationErrors | null  => {
  const validDate = new Date(control.value) < new Date();
  return validDate ? null : {
    incorrectName: true,
  }}
}
