import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import{ServicesService} from '../services.service'
import{LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService, private router: Router,public service:ServicesService) { }
    dataset;
    name;
    age;
    email;
  ngOnInit() {
    this.get_data();
  }
   get_data()
   {
    this.dataset=this.storage.get("Udeatils")
    console.log(this.dataset)
     this.name=this.dataset.firstName;
     this.age=this.dataset.age;
     this.email=this.dataset.email;
    console.log(this.name+" "+this.age+" "+this.email);
   }
  edit_profile()
  {
    
   this.router.navigate(['editpro']);
  }
}
