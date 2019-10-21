import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

import { Observable } from "rxjs";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required], 
      confirm_password: ['', Validators.required], 
      email: ['', Validators.required], 
      category: ['', Validators.required], 
  });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm);
  }
  get f() { return this.loginForm.controls; }
}
