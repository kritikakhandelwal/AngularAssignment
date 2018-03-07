import { Component } from '@angular/core';
import { DataService } from "./dataservice.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent {
  title = 'Knoldus Video Channel';
  constructor(private _router:Router,
              private http: HttpClient,
              private _dataservice:DataService) { };

}
