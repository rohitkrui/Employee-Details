import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { CrevanceComponent } from './crevance/crevance.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { StudentdetailsComponent } from './details/studentdetails/studentdetails.component';
import { AdmindetailsComponent } from './details/admindetails/admindetails.component';


@NgModule({
  declarations: [
    CrevanceComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    DetailsComponent,
    StudentdetailsComponent,
    AdmindetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    CrevanceComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    DetailsComponent,
    StudentdetailsComponent,
    AdmindetailsComponent
  ]
})
export class HomeModule { }
