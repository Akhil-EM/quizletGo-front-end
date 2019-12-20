import { Component, OnInit } from '@angular/core';
 import{ServicesService} from '../services.service'
@Component({
  selector: 'app-fame',
  templateUrl: './fame.component.html',
  styleUrls: ['./fame.component.css']
})
export class FameComponent implements OnInit {
  data;
  scholers:any;
  constructor(public service:ServicesService) { }

  ngOnInit() {
    this.get_data();
  }
   get_data()
   {
     this.service.fame_view(this.data)
     .subscribe((value)=>{
      // console.log(value);
       this.data=value;
       this.scholers=this.data.status;
       console.log(this.scholers[2])
     })
   }
}
