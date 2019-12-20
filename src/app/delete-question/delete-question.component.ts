import { Component, OnInit } from '@angular/core';
import{ServicesService} from '../services.service'
@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {
   model:any={};
   quiz_array=[];
   data;
  constructor(public service:ServicesService) { }

  ngOnInit() {
    this.get_data();
  }
  
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    this.service.delete_quiz(this.model)
    .subscribe((data)=>{ 
      console.log(data);      
     if(JSON.parse(JSON.stringify(data)).status=="success")
  {
    alert(" question deleted successfully !! ");
    this.ngOnInit();
        }
  else
  {
    alert("somthing went wrong !! , please try again ")
  }
  });
  }
  get_data()
  {
    this.service.view_quiz("gk")
    .subscribe((value)=>{
        this.data=value;
        
           this.quiz_array=this.data.status;
          console.log(this.quiz_array);
    })
  }
}
