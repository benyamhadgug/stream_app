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
import { JwtService } from 'src/app/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  registerError=false; 
  errorMessage="";
  Roles: any = ['Viewer', 'Broadcaster'];

  constructor(private formBuilder: FormBuilder, private jwtService: JwtService, private router: Router) { 
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      usergroup: ['V', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required], 
      confirm_password: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]], 
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirm_password')
  });
  }
  onSubmit() {
    let username= this.registerForm.controls.username.value, 
      password= this.registerForm.controls.password.value, 
      email= this.registerForm.controls.email.value, 
      name= this.registerForm.controls.name.value, 
      usergroup= this.registerForm.controls.usergroup.value;
    this.submitted = true;
    this.jwtService.register(username, email, password, name, usergroup)
      .subscribe((data)=> {
        if(parseInt(data.success) === 1) {
          this.registerError=false; 
          this.router.navigate(['login']); 
        } else {
          this.errorMessage= data.message;
          this.registerError=true; 
          //console.log("Registering Failed. .... " + this.errorMessage);
        }
      });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  get f() { return this.registerForm.controls; }
}
