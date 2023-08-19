import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Videos } from '../model/type';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public data = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getVideo(): Observable<Videos[]>{
    return this.http.get<Videos[]>('http://localhost:9000/videos', this.httpOptions);
  }
}
