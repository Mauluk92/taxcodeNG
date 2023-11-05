import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {nameValidator} from "./name.directive";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private builder: FormBuilder) {
    this.taxcodeForm = this.builder.nonNullable.group({nameInput: this.builder.nonNullable.control('', [Validators.required, nameValidator()])}, {updateOn: 'submit'})

  }

  taxcodeForm : FormGroup;
  get nameInput(){
    return this.taxcodeForm.get('nameInput')
  }

  title = 'taxcode';
}
