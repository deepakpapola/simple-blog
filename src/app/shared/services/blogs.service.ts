import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogsService {
  // headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'text/html' });


  baseUrl ="http://localhost:3000/admin";

  constructor(private http:HttpClient) { }

  newblog(en,title) {

   // console.log(blogHtml);
   return this.http.post(this.baseUrl+`/newBlog`,{title,en})
   .map(data => data);
  }

  getBlogs() { console.log('get blogs servis runng');
    return this.http.get(`${this.baseUrl}/allBlogs`)
    .map((data) => data);
  }

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
