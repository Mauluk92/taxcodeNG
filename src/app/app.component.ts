import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {nameValidator} from "./name.directive";
import {surnameValidator} from "./surname.directive";
import {birthplaceValidator} from "./birthplace.directive";
import {dateValidator} from "./date.directive";
import {CalculatorService} from "./calculator.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private builder: FormBuilder,
              private calculator: CalculatorService) {
    this.taxcodeForm = this.builder
      .nonNullable
      .group(
        {
          nameInput: this.builder.nonNullable.control('', [Validators.required, nameValidator()]),
          surnameInput: this.builder.nonNullable.control('', [Validators.required, surnameValidator()]),
          birthplaceInput: this.builder.nonNullable.control('', [Validators.required, birthplaceValidator()]),
          dateInput: this.builder.nonNullable.control('', [Validators.required, dateValidator()]),
          genderInput: this.builder.nonNullable.control('', [Validators.required])
        },
        {updateOn: 'submit'})

  }

  taxcodeForm: FormGroup;

  get nameInput() {
    return this.taxcodeForm.get('nameInput')
  }

  get surnameInput(){
    return this.taxcodeForm.get('surnameInput')
  }

  get birthplaceInput(){
    return this.taxcodeForm.get('birthplaceInput')
  }

  get dateInput(){
    return this.taxcodeForm.get("dateInput")
  }

  get genderInput(){
    return this.taxcodeForm.get("genderInput")
  }

  get code(){
    let date = new Date(this.dateInput?.value)
    return this.calculator.calculate(
      this.surnameInput?.value,
      this.nameInput?.value,
      date.getFullYear().toString(),
      date.getMonth().toString(),
      date.getDate().toString(),
      this.genderInput?.value
      )
  }

  title = 'taxcode';
  protected readonly Object = Object;
}
