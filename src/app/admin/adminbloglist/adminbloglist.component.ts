import { BlogsService } from './../../shared/services/blogs.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-adminbloglist',
  templateUrl: './adminbloglist.component.html',
  styleUrls: ['./adminbloglist.component.css']
})
export class AdminbloglistComponent implements OnInit {

  blogs:any;
  constructor(private _sanitizer:DomSanitizer, private blogService:BlogsService) { }

  ngOnInit() {
    this.getAllBlogs();
  }

  private getAllBlogs() {// console.log('get all blog runing');
    this.blogService.getBlogs()
      .subscribe(blogs => {
        this.blogs =blogs;  console.log(blogs);
      });
    }

    // todo bring only 12 data at a time (pagination), create a format like 3 rows div with 4 columns inside , and loop accodingly from componen.ts rather than html file.. logic to do that below..
    
    // const pairData = [];
    
    // let indexer = 0;
    // let tempArray = [];
    // data.forEach ((item, index) => {
    //   if ((index+1)%4 === 0 ) {d
    //     tempArray.push (item);
    //     pairData.push (tempArray);
    //     tempArray = [];
    //   } else {
    //     tempArray.push (item);
    //   }
    // });


    // 
    // let html =   pairedData.map ( data => 
    //     <div class="row">
    //           data.map (item => (
    //             < <div class='col-md3'>
    //               item
    //       </div>
    //     </div>
    //   console.log(html);

    transform(v:string):SafeHtml {
      return this._sanitizer.bypassSecurityTrustHtml(v);
    }
}
