import { BlogsService } from '../../shared/services/blogs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

    pageContent:any;
    edit:boolean=false;

    constructor(private blogService:BlogsService){ }

    ngOnInit() {

    }

    sendData(){
       // console.log(this.pageContent);
       this.blogService.newblog(this.pageContent);
    }
}
