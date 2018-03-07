import { Component, OnInit , Input } from '@angular/core';
@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.css']
})
export class SingleVideoComponent implements OnInit {
  @Input() title;
  @Input() thumbnailUrl;
  constructor() { }

  ngOnInit() {
  }

}
