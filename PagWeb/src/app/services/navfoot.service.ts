import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavfootService {
  private url = 'app/models/navfoot.json';

  constructor(private http: HttpClient) { }

  getNavFoot(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
