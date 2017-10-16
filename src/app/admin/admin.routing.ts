import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminbloglistComponent } from './adminbloglist/adminbloglist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
      { path: 'admin', component: AdminHomeComponent,
      children: [
        // { path: '', redirectTo: 'overview', pathMatch: 'full' },
        { path: 'blogs', component: AdminbloglistComponent },
        { path: 'newBlog', component: DashboardComponent }
      ]
     }

    ])],
    exports: [RouterModule]
  })
  export class adminRouting {}