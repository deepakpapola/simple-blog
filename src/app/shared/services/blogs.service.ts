import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogsService {
  // headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'text/html' });


  baseUrl ="http://localhost:3000/admin";

  constructor(private http:HttpClient) { }

  newblog(blogHtml,title) {

   // console.log(blogHtml);
   return this.http.post(this.baseUrl+`/newBlog`,{title,blogHtml});
  }

  // getBlogs() {
  //   return this.http.get(`${this.baseUrl}/users`)
  //     .map((response:Response) => response.json());
  // }

  // delete(id: string) {
    
  //   let url = `${this.baseUrl}/blogs/delete/${id}`;
  //   return this.http.delete(url);
  // }
  // edit(blog ){ 
  //   let url = `${this.baseUrl}/blogs/edit`;
  //   // console.log(data);
  //   return this.http.put(url, blog)
  //     .map(data => data.json());;
      
  // }
}
