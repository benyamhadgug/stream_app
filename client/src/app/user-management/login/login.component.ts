import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

import { Observable } from "rxjs";
import { JwtService } from 'src/app/services/jwt.service';

const jwtDecode = require('jwt-decode');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private jwtService: JwtService) { 
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  onSubmit() {
    let token:any= this.jwtService.login( this.loginForm.controls.username.value , this.loginForm.controls.password.value);
    localStorage.setItem("access_token",token);
    this.submitted = true; 
    var decoded = jwtDecode(token);

    console.log("The result token is " + token);
  }
  get f() { return this.loginForm.controls; }
}
