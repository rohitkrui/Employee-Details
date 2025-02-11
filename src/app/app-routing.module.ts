import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrevanceComponent } from './home/crevance/crevance.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './home/login/login.component';
import { ContactComponent } from './home/contact/contact.component';
import { DetailsComponent } from './home/details/details.component';
import { AdmindetailsComponent } from './home/details/admindetails/admindetails.component';
import { StudentdetailsComponent } from './home/details/studentdetails/studentdetails.component';
 

const routes: Routes = [
  { path: 'crevance', component: CrevanceComponent },
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},

  {
    path: 'contact',
    component: ContactComponent,
    children: [
      { path: 'admin-details', component: AdmindetailsComponent }
    ]
  },
  
  {
    path: 'details',
    component: DetailsComponent,
    children: [
      { path: 'student-details', component: StudentdetailsComponent },
      { path: 'user-details', component: AdmindetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
