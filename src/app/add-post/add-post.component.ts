import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import{ServicesService} from '../services.service'
import{LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  model: any = {};
  uid;
  dataset;
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService, private router: Router,public service:ServicesService) { }

  ngOnInit() {
  }
  onSubmit()
  {
    
       this.dataset=this.storage.get("Udeatils");
    console.log(this.dataset);
     this.uid=this.dataset.userId;
    this.model.Uid=this.uid;
    console.log(JSON.stringify( this.model));
     this.service.add_post(this.model)
     .subscribe((data)=>{
        //console.log(data)
      if(JSON.parse(JSON.stringify(data)).status=="success")
      {
        alert("new post added successfully !! ");
         this.router.navigate(['viewpost']); 
        
      }
      else
      {
        alert("somthing went wrong !! , please try again ")
      }
     });
     
  }
}
