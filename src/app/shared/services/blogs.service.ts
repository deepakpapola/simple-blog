import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogsService {

  constructor(private http:HttpClient) { }

  newblog(blogHtml) {

    console.log(blogHtml);
  }
}
