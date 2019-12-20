import { Component, OnInit,Inject} from '@angular/core';
import { Router } from '@angular/router';
import{ServicesService} from '../services.service'
import{LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 
export class LoginComponent implements OnInit {
    
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService, private router: Router,public service:ServicesService,) { }

  ngOnInit() {
    if(this.storage.get('key')==true)
    {
      this.router.navigate(['viewpost'])
    }
  }
  model: any = {};
    userData;
    user;
    adname;
    adpass;
  onSubmit() {
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    this.service.login(this.model)
     .subscribe((data)=>{         
         this.userData=data
          this.user=this.userData.status;
          console.log(this.user)
         if(JSON.parse(JSON.stringify(data)).key=="true")
      {
        alert("login is success !! ");
         this.storage.set('Udeatils',this.user);  
         this.storage.set('key',true); 
         ///console.log(this.storage.get('Udeatils'))
         this.router.navigate(['viewposts']); 
         window.location.reload();
      }
      else
      {
        alert("somthing went wrong !! , please try again ")
      }
     });

  }
  navigate()
  {
    ///alert("just for navigation !!!!");
    this.router.navigate(['signup'])
  }
}
