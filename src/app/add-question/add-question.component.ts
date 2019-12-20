import { Component, OnInit } from '@angular/core';
import{ServicesService} from '../services.service'
import { Router } from '@angular/router';
import { format } from 'url';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
    model:any={};
    id:Number;
    val;
  constructor(public service:ServicesService, private router: Router) { }

  ngOnInit() {
  
  }
  onSubmit() {
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
     this.service.get_id( )
     .subscribe((data)=>{ 
        var id;
          this.val=data;
           id=this.val.status;
         console.log(id) 
         this.model.id=id+1;
         this.model.topic="gk";
        console.log(this.model);

        this.service.add_quiz(this.model)
        .subscribe((data)=>{ 
          console.log(data);      
         if(JSON.parse(JSON.stringify(data)).status=="success")
      {
        alert("new question added successfully !! ");
        this.router.navigate(['adminDeleteQuiz']) 
          }
      else
      {
        alert("somthing went wrong !! , please try again ")
      }
     });

        

     })
     
    
  }
    
}
