import { Video } from "src/app/interface/type";

export class getVideosActionType {
    static readonly type = '[Video] Get Videos';
}

export class addVideoActionType {
    static readonly type = '[Video] Add Video';
    constructor(public video: Video){}
}