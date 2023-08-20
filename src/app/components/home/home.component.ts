import { Video } from "./../../model/type";
import { VideoService } from "./../../services/video.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public videoList: Video[] = [];

  constructor(
    private videoService: VideoService
  ){}

  ngOnInit(): void {
    if(this.videoService.data.length > 0) {
      this.videoList = this.videoService.data;
    }else {
      this.getVideos();
    }
  }

  getVideos() {
    this.videoService.getVideos().subscribe({
      next: (data) => {
        this.videoList = data;
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
