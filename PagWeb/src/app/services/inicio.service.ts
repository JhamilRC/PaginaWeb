import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  private url = 'app/models/inicio.json';

  constructor(private http: HttpClient) { }

  getInicio(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
