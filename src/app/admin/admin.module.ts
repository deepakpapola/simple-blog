import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminbloglistComponent } from './adminbloglist/adminbloglist.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpClientModule } from '@angular/common/http';
import { BlogsService } from '../shared/services/blogs.service';
import { FormsModule } from '@angular/forms';
import { adminRouting } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
    adminRouting,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() 
  ],
  providers: [
    BlogsService,
    HttpClientModule
  ],
  declarations: [DashboardComponent, AdminbloglistComponent, AdminHomeComponent]
})
export class AdminModule { }
