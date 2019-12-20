import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component'
import{StorageServiceModule} from 'angular-webstorage-service'
import {HttpClientModule} from'@angular/common/http';
import { ViewPostComponent } from './view-post/view-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FameComponent } from './fame/fame.component';
import { TestsComponent } from './tests/tests.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    ViewPostComponent,
    AddPostComponent,
    ErrorpageComponent,
    EditProfileComponent,
    FameComponent,
    TestsComponent,
    AddQuestionComponent,
    DeleteQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
