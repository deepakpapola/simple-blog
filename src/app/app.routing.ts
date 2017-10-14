import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

    { path : '', component: BlogsComponent },
    { path : 'aboutus', component: AboutusComponent},

    //{ path : '**', redirectTo: '' },
    { path: 'admin', redirectTo: 'admin', pathMatch: 'full' }
    
];

// export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class routing {}