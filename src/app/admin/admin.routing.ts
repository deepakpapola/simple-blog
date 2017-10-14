import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
      { path: 'admin', component: DashboardComponent }
    ])],
    exports: [RouterModule]
  })
  export class adminRouting {}