import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import{ServicesService} from '../services.service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,public service:ServicesService,public route:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
        }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

    this.service.signup(this.registerForm.value)
    .subscribe((data)=>{
      console.log(data);
    
      if(JSON.parse(JSON.stringify(data)).status=="success")
      {
        alert("new account created successfully ");
         this.route.navigate([""]);
      }
      else
      {
        alert("somthing went wrong !!")
      }
    })

}
}
