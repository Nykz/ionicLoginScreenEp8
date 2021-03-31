import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.validator();
  }

  validator() {
    this.form = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
    });
  }

  submit() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('form value', this.form.value);
    // submit form to server
  }

}
