import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  // Template Form
  @ViewChild('form') form: NgForm;
  username: string;
  password: string;

  // Reactive Form
  reactiveForm: FormGroup;
  

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      username: new FormControl('ABC',[Validators.required,Validators.maxLength(10),forbiddenNameValidator(/^([^0-9]*)$/)]),
      password: new FormControl('',[Validators.required]),
    });
  }

  loginTemplateForm(){
    // this.form.controls.username.value;
    console.log(this.form.value);
    // console.log(this.form.controls.a.value);
    // console.log(this.password);
  }

  loginReactiveForm(){
    console.log(this.reactiveForm.value);
    // console.log(this.reactiveForm.controls.username.value);
    // console.log(this.reactiveForm.controls.password.value);
  }
}

function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = !nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}