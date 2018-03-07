import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { DataService } from "../dataservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[DataService]
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(    public fb:FormBuilder,
                  private _router:Router,
                  private _dataservice:DataService) { }

  public loginForm=this.fb.group({
    emailId:new FormControl('',Validators.compose([Validators.required,Validators.email])),
    pwd:new FormControl('',Validators.required)
  });

  login(){
    this.email=this.loginForm.controls.emailId.value;
    this.password=this.loginForm.controls.pwd.value;
    this._dataservice.setkey(this.email);
    this._router.navigate(['videos']);
  }

  ngOnInit() {
    if(this._dataservice.isloggedIn()){
      this._router.navigate(['videos']);
    }
  }

}
