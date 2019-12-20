import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SignupComponent} from './signup/signup.component'
import {LoginComponent} from './login/login.component'
import{ProfileComponent} from './profile/profile.component'
import{AddPostComponent} from './add-post/add-post.component'
import{ViewPostComponent} from './view-post/view-post.component'
import{ErrorpageComponent}from './errorpage/errorpage.component'
import{EditProfileComponent}from'./edit-profile/edit-profile.component'
import{TestsComponent} from'./tests/tests.component'
import{FameComponent} from'./fame/fame.component'
import{AddQuestionComponent}from './add-question/add-question.component'
import{DeleteQuestionComponent} from './delete-question/delete-question.component'
const routes: Routes = [{path:"signup",component:SignupComponent},{path:"",component:LoginComponent},
{path:"profile",component:ProfileComponent},{path:"addpost",component:AddPostComponent}
,{path:"viewpost",component:ViewPostComponent},{path:"editpro",component:EditProfileComponent}
,{path:"fame",component:FameComponent},{path:"tests",component:TestsComponent}
,{path:"adminAddquz",component:AddQuestionComponent},
 {path:"adminDeleteQuiz",component:DeleteQuestionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
