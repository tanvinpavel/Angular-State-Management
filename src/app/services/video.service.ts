import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Video } from '../interface/type';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  public data = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(
      'http://localhost:9000/videos',
      this.httpOptions
    );
  }

  getVideo(id: number): Observable<Video> {
    return this.http.get<Video>(
      `http://localhost:9000/videos/${id}`,
      this.httpOptions
    );
  }
}
