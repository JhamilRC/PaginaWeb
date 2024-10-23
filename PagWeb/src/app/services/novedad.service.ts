import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovedadService {
  private url = 'app/models/novedades.json';

  constructor(private http: HttpClient) { }

  getNovedad(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
