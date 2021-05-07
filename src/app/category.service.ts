import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  URL: string = "http://localhost:8081/";
  constructor(private http: HttpClient) { };


  addCategory(category: Category) {
    return this.http.post(this.URL + 'category',category,{ headers: { "content-type": 'application/json' },responseType: "text" });
  }



}
