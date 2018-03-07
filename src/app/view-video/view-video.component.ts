import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit {
  videoId;
  url='https://www.youtube.com/embed/'
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private sanitizer:DomSanitizer
  ) {
    this.route.params.forEach(( params: Params ) => {
      this.videoId = params['vId'];
      this.url=this.url+this.videoId;
    } );
  }

  getVideoUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit() {
  }

}
