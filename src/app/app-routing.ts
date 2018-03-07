///<reference path="../../node_modules/@angular/router/src/router_module.d.ts"/>
import { Routes, RouterModule } from "@angular/router";
import { ViewVideoComponent } from "./view-video/view-video.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path:'videos',component: HomeComponent
  },
  {
    path:'viewVideo/:vId',component: ViewVideoComponent
  },
  {
    path:'**',component: LoginComponent
  }
];

export const routing = RouterModule.forRoot( appRoutes );
