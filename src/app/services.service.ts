import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public httpobj:HttpClient) { }

  signup(userdata)
  {
    
     return this.httpobj.post("https://quizlet-go-back-end.herokuapp.com/users/signup",userdata)

  }
  login(data)
  {
    return this.httpobj.post("https://quizlet-go-back-end.herokuapp.com/users/login",data)
  }
  view_posts()
  {
   let  data=null;
    return this.httpobj.post('https://quizlet-go-back-end.herokuapp.com/question/viewpost',data)
  }
  add_post(data)
  {
    return this.httpobj.post('https://quizlet-go-back-end.herokuapp.com/question/addpost',data)
  }
  edit_user(data)
  {
    return this.httpobj.post('https://quizlet-go-back-end.herokuapp.com/users/edit',data)
  }
  fame_view(data)
  {
    return this.httpobj.post('https://quizlet-go-back-end.herokuapp.com/famewall/view',data)
  }
  view_quiz(values)
  { 
    
    return this.httpobj.post('https://quizlet-go-back-end.herokuapp.com/question/viewquiz',{data:values})
  }
  insert_fame(data)
  {
    return this.httpobj.post('https://quizlet-go-back-end.herokuapp.com/famewall/insert',data);
  }
  get_id()
  {
    var data="dat";
    return this.httpobj.post('https://quizlet-go-back-end.herokuapp.com/admin/getid',data);
    
  }
  add_quiz(data)
  {
    return this.httpobj.post('https://quizlet-go-back-end.herokuapp.com/admin/addqus',data);
  }
  delete_quiz(data)
  {
    return this.httpobj.post('https://quizlet-go-back-end.herokuapp.com/admin/deletequs',data);
  }
}
