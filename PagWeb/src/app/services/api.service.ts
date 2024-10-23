import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseUlr;

  constructor(public http: HttpClient) { }
  
  getProducts() {
    return this.http.get<any>(this.baseUrl);
  }
}
