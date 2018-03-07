import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() { }

  setkey(user:string){
    if(!window.localStorage.getItem("userkey")){
      window.localStorage.setItem("userkey",user);
    }
  }
  private getKey(){
    if(window.localStorage.getItem("userkey")){
      return window.localStorage.getItem("userkey")
    }
    return null;
  }

  isloggedIn(){
    if(this.getKey()!=null){
      return true;
    }
    return false;
  }

  logout(){
    if(this.getKey()!=null){
      window.localStorage.removeItem("userkey")
    }
  }
}
