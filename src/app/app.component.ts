import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fairTask';
  @ViewChild("signUp") signup !: NgForm;
  mocArr=[
    {contactMode: 'Email', id:'123'},
    {contactMode:'phone', id:'124'}
  ]
  constructor(){
  }
  ngOnInit(): void {
    
  }
  
  userDetails={
    userInfo:{
      "username": "Jhon Doe",
      "email": "jd@gmail.com",
    },
      "secretQuetion": "favourateSinger",
      "answer": "Argit Singh",
      "isSubscribed": true,
      "modeofcontact": "Email"
  
  }

  onSignUp(signUp: NgForm){
    //  if(signUp.valid){
      console.log(signUp); 
      console.log(signUp.value);
      console.log(signUp.valid);
      
    //  }
  }

  onEdit(){
    this.signup.form.patchValue(this.userDetails)
  }
}
