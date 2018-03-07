import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../dataservice.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DataService]
})
export class HomeComponent implements OnInit {
  videoList;
  isloggedIn=false;
  constructor(private _router:Router,
              private http: HttpClient,
              private _dataservice:DataService) { }

  getVideos(){
    return this.http.get('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCP4g5qGeUSY7OokXfim1QCQ&key=AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY');
  };
  videoCallback(data){
    this.videoList=data.items;
    console.log(this.videoList)
  }
  logout(){
    this._dataservice.logout();
    this._router.navigate(['']);
  }
  ngOnInit() {
    if(!this._dataservice.isloggedIn()){
      this._router.navigate(['']);
    }
    this.isloggedIn=true;
    this.getVideos().subscribe(data => this.videoCallback(data));
  }

}
