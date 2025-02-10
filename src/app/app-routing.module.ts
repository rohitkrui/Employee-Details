import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrevanceComponent } from './home/crevance/crevance.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './home/login/login.component';
import { ContactComponent } from './home/contact/contact.component';
import { DetailsComponent } from './home/details/details.component';

const routes: Routes = [
  { path: 'crevance', component: CrevanceComponent },
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
