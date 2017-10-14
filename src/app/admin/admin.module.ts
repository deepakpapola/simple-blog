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
    adminRouting,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() 
  ],
  providers: [
    BlogsService,
    HttpClientModule
  ],
  declarations: [DashboardComponent]
})
export class AdminModule { }
