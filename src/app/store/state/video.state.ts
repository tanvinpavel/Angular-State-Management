import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Video } from 'src/app/interface/type';
import { getVideosActionType } from '../actions/video.action';
import { VideoService } from 'src/app/services/video.service';
import { tap } from 'rxjs';

//state model
export class VideosStateModel {
  videos: Video[] = [];
  videosLoaded: boolean = false;
}

@State<VideosStateModel>({
  name: 'store',
  defaults: {
    videos: [],
    videosLoaded: false
  },
})

@Injectable()
export class VideoState {

    constructor(
        private videoService: VideoService
    ){}

    @Selector()
    static videoLoaded(state: VideosStateModel) {
        return state.videosLoaded;
    }

    @Selector()
    static getVideoList (state: VideosStateModel) {
        return state.videos;
    }

    @Action(getVideosActionType)
    getVideos({ getState, setState }: StateContext<VideosStateModel>){
        return this.videoService.getVideos().pipe(tap((data) => {
            const currentState = getState();
            setState({
                ...currentState,
                videos: data,
                videosLoaded: true
            });
        }));
    }
}
