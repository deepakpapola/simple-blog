import { HttpClient } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications/dist';
import { BlogsService } from '../../shared/services/blogs.service';
import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

    edit:boolean=false;
    editorContent:any;
    title:string;
    public options: Object = {
      // Set the image upload URL.
      imageUploadURL: 'http://localhost:3000/imageUpload',
      // Additional upload params.
      imageUploadParams: {id: 'my_editor'},
      // Allow to upload PNG and JPG.
      imageAllowedTypes: ['jpeg', 'jpg', 'png'],
      // url: "http://localhost:3000/imageDelete",
      events : {
        'froalaEditor.image.removed' : (e, editor,$img) =>{
          
          //console.log( $img.attr('src'));
          this.http.post('http://localhost:3000/imageDelete', {
            src: $img.attr('src')
          }).subscribe(data =>{});
        },
        'froalaEditor.file.unlink':(e, editor,file) =>{
          
          //console.log(file.getAttribute('href'));
          this.http.post('http://localhost:3000/fileDelete', {
            src: file.getAttribute('href')
          }).subscribe(data =>{});
        }
      },
      // set options for file uploads and delete
      fileUploadURL: 'http://localhost:3000/fileUpload'
    };

    constructor(private blogService:BlogsService, public notify: NotificationsService,private http:HttpClient ){ }

    ngOnInit() {

    }
    // add new blog ////////////
    newBlog(){
      console.log(this.editorContent,this.title);

       this.blogService.newblog(this.editorContent,this.title)
       .subscribe(data => {  
          if(data['success'] == true) {
            
            this.notify.success('saved!', data['success'], {
              position: ["top", "right"],
              timeOut: 3000,
              showProgressBar:false,
              pauseOnHover: true,
              lastOnBottom:true,        
              animate:"scale",
              clickToClose: true
            });
          } else {
            this.notify.error('Oops!', data['success'], {
              position: ["top", "right"],
              timeOut: 3000,
              showProgressBar:false,
              pauseOnHover: true,
              lastOnBottom:true,        
              animate:"scale",
              clickToClose: true
            });
          }
        });
    }
}
