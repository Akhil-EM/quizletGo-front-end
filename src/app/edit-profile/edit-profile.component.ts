import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import{ServicesService} from '../services.service'
import{Router} from '@angular/router'
import{LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,private formBuilder: FormBuilder,public service:ServicesService,public router:Router) { }
  dataset;
  name;
  age;
  email;
  psw;
  id;
  userData;
  ngOnInit() {
   
     this.validation();
  }
  get f() { return this.registerForm.controls; }
   
  
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
     console.log(this.dataset._id);
     this.service.edit_user(this.registerForm.value)
     .subscribe((data)=>{
         
         this.userData=data
         console.log(this.userData.data)
         //this.storage.set('Udeatils',this.userData.data); 
          console.log(this.storage.get("Udeatils"))
         if(JSON.parse(JSON.stringify(data)).Status=="Success")
      {
        alert("profile updated !! ");
         this.storage.set('Udeatils',this.userData.data);  
         console.log(this.storage.get('Udeatils')) 
         this.router.navigate(['profile']); 
      }
      else
      {
        alert("somthing went wrong !! , please try again ")
      }
     });
    }
validation()
{
   ///getting local storage values
   this.dataset=this.storage.get("Udeatils")
   console.log(this.dataset)
   this.name=this.dataset.firstName;
    this.age=this.dataset.age;
    this.email=this.dataset.email;
    this.psw=this.dataset.password;
    this.id=this.dataset._id;
   console.log(this.name+" "+this.age+" "+this.email);
   
     
    
  this.registerForm = this.formBuilder.group({
    id:['',Validators.required],
    firstName: ['', Validators.required],
    age: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
      }, {
    validator: MustMatch('password', 'confirmPassword')
});
///setting values
this.registerForm.setValue({
  id:this.id,
  firstName:this.name,
  age:this.age,
  email:this.email,
  password:this.psw,
  confirmPassword:this.psw 
})
}

}
