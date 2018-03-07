import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing } from "./app-routing";
import { AppComponent } from './app.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SingleVideoComponent } from './home/single-video/single-video.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewVideoComponent,
    LoginComponent,
    HomeComponent,
    SingleVideoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
