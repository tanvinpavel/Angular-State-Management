import { Select, Store } from '@ngxs/store';
import { Video } from '../../interface/type';
import { VideoService } from './../../services/video.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { getVideosActionType } from 'src/app/store/actions/video.action';
import { Observable, Subscription } from 'rxjs';
import { VideoState } from 'src/app/store/state/video.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public videoList: Video[] = [];
  public videoLoadedSubscription!: Subscription;

  @Select(VideoState.getVideoList) videoList$!: Observable<Video[]>;
  @Select(VideoState.videoLoaded) videoLoaded$!: Observable<boolean>; 

  constructor(
    private videoService: VideoService,
    private store: Store  
  ) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.videoLoadedSubscription = this.videoLoaded$.subscribe(res => {
      if(!res) {
        this.store.dispatch(new getVideosActionType());
      }
    }) 
  }

  ngOnDestroy(){
    this.videoLoadedSubscription.unsubscribe();
  }
}
