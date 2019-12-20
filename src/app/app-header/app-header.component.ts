import { Component, OnInit,Inject} from '@angular/core';
import{LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
   key=false;
   uname="none";
   pass="none";
   data:any={};
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,public route:Router) { }

  ngOnInit() {
    this.key=this.storage.get('key')
    // console.log(this.key)
    // console.log(this.storage.get('Udeatils'))
    this.get_data();
  }
  log_out()
  {
    alert("log_out");
    this.storage.remove('Udeatils');  
    this.storage.remove('key'); 
    //console.log(this.storage.get('key') +" "+this.storage.get('Udeatils'))
    this.key=false;
     this.route.navigate(['']);
    this.ngOnInit();
    
  }
  get_data()
  {
    this.data=this.storage.get('Udeatils');
    if(this.data==null)
    {
      this.uname="nonemail";
      this.pass="nonepass"
    }
    else
    {
     this.uname=this.data.email;
    this.pass=this.data.password;
    //console.log(this.pass +" "+this.uname)
    }
      
    
  }

}
