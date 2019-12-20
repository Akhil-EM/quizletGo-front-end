import { Component, OnInit } from '@angular/core';
import{ServicesService}from '../services.service'

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
   posts;
   values;
  constructor(public service:ServicesService) { }
   
  ngOnInit() {
    this.view_data();
  }
  view_data()
  {
    this.service.view_posts()
    .subscribe((data)=>{
      //console.log(data);
         this.values=data;
         this.posts=this.values.status;
         console.log(this.values.status)
         
    })
  }


}
