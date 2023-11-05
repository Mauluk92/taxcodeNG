import { Component } from '@angular/core';
import {AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {nameValidator} from "./name.directive";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private builder: FormBuilder) {
    this.taxcodeForm = this.builder.group({nameUser: this.builder.nonNullable.control('', [Validators.required, nameValidator()]), options: {updateOn:'submit'}})
  }

  taxcodeForm;
  get nameUser() {
    return this.taxcodeForm.get("nameUser");
  }
  title = 'taxcode';
  protected readonly console = console;
}
