import { HttpClientModule } from '@angular/common/http';

import { AdminModule } from './admin/admin.module';
import { routing } from './app.routing';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
