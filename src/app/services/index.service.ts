import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// const baseUrl = 'http://localhost:8080/api/';


@Injectable({
  providedIn: 'root'
})
export class IndexService {
  constructor(private http: HttpClient) { }
  }
