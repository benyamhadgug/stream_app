import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

import { Observable } from "rxjs";
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required], 
      confirm_password: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]], 
      category: ['M', Validators.required], 
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirm_password')
  });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm);
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  get f() { return this.registerForm.controls; }
}
