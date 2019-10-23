import { Injectable } from '@angular/core';
import { HttpService } from './../../core/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  constructor(private http: HttpService) {}

  getCompains(): Observable<any> {
    return this.http.get('GetResult');
  }

  pausedCompains(id: number | string): Observable<any> {
    return this.http.post('MakeItPause', id);
  }
}
