import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Video } from 'src/app/model/type';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  public video: Video | undefined;
  public url: string  = '';

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService  ){}

  ngOnInit(): void {
    const queryParams = this.route.snapshot.params;
    const id = queryParams?.['id'] || null;

    console.log(id);

    this.getVideoDetails(id);
  }

  getVideoDetails(id: number) {
    this.videoService.getVideo(id).subscribe({
      next: (data) => {
        this.video = data;
        this.url = data?.link;
        console.log(data);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  
}
