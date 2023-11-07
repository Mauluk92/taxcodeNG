import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function nameValidator() : ValidatorFn { return (control: AbstractControl<string>):
ValidationErrors | null  => {
  const regExpName = new RegExp("^([A-Z]|')+$");
  const validName = regExpName.test(control.value.toUpperCase().trim());
  return validName ? null : {
    incorrectName: true,
  }}
}


