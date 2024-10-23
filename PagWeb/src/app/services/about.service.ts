import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private url = 'app/models/abouts.json';

  constructor(private http: HttpClient) { }

  getAbout(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
