import { Component, OnInit,Inject} from '@angular/core';
import{ServicesService} from '../services.service'
import{LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
            quiz_array=[];
            data;
            model: any = {};
            mark=0;
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,public service:ServicesService) { }

  ngOnInit() {
      this.get_qustion();
  }
  get_qustion()
  {
    this.service.view_quiz("gk")
     .subscribe((value)=>{
         this.data=value;
         
            this.quiz_array=this.data.status;
           console.log(this.quiz_array);
     })
  }
  
  start_test()
  {
    this.hider("start-test")
    // this.show("cnt-time");
    this.show("exam")
    
  }
   hider(data)
   {
     console.log(data)
      document.getElementById(data).style.display="none";
   }
   show(data)
   {
    document.getElementById(data).style.display="block";
   }
   submit_test( )
   {
     //console.log(this.model)
     var ele = document.getElementsByTagName('input'); 
       let i;
       var value=" ";
        var obj={ans:1}
        var n= new Array();
     for(i = 0; i < ele.length; i++) { 
           
         if(ele[i].type="radio") { 
           
             if(ele[i].checked) 
                         value += ele[i].name + "$" 
                         + ele[i].value + "*";
                         var temp = new Array();
                         // this will return an array with strings "1", "2", etc.
                         temp = value.split("*");    
         } 
     } 
    //  console.log(value);
    //  console.log(temp)
       this.check_ans(temp)
   }
   check_ans(val)
   {
      var data;
      var cnt;
      var intex;
      var ans;
      var temp = new Array();
      data=val;
    //  console.log(data)
    //  console.log(this.quiz_array)
      for(let i=0;i<data.length-1;i++)
      {
       //console.log(data[i])
        temp=data[i].split("$")
        ///console.log(temp)
        cnt=temp[0]
        ans=temp[1]
      //  console.log(cnt+" "+ans)
      //    console.log(this.quiz_array[cnt-1].right)
         if(ans.toLowerCase()==(this.quiz_array[cnt-1].right).toLowerCase())
         {
           this.mark=this.mark+1;
         }
      }
      console.log("your mark  is "+this.mark)     
      // this.hider("cnt-time");
      this.hider("exam");
      this.show("result");
      if(this.mark>10)
      {
        this.insert_wall(this.mark)
      }    
   }
   insert_wall(mk)
   {
     var data_pack;
     var uid;
     var uname;
     var user=this.storage.get("Udeatils")
     console.log(user.userId);
     console.log(user.firstName);
     uid=user.userId;
     uname=user.firstName;
      data_pack={id:uid,name:uname,mark:mk}
      console.log(data_pack)
      var data_pack;
      
      this.service.insert_fame(data_pack)
     .subscribe((data)=>{         
          console.log(data)
         if(JSON.parse(JSON.stringify(data)).status=="success")
      {
        alert("your mark added to wall of fame !! ");
      }
      else
      {
        alert("somthing went wrong !! , please try again ")
      }
     });
   }
}
