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
import { Router } from '@angular/router';

// const jwtDecode = require('jwt-decode');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginError=false; 
  constructor(private formBuilder: FormBuilder, private jwtService: JwtService, private router: Router) { 
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  onSubmit() {
    let token:any= null; 
    let message: string;
    let success:number; 
    let user:any;
    this.submitted = true; 
    this.jwtService.login( this.loginForm.controls.username.value , this.loginForm.controls.password.value)
        .subscribe((data)=> { 
          if(parseInt(data.success) === 1) {
            localStorage.setItem ( "access_token", token );
            localStorage.setItem("usergroup", data.user.usergroup); 
            localStorage.setItem("username", data.user.username);
            localStorage.setItem("name", data.user.name);
            localStorage.setItem("email", data.user.email);
            localStorage.setItem("stream_key", data.user.stream_key);
            this.loginError=false; 
            this.router.navigate(['home']);
          }else {
            this.loginError=true; 
          }
    } );
    
    //var decoded = jwtDecode(token);
    //console.log("The result token is " + token);
  }
  get f() { return this.loginForm.controls; }
}
