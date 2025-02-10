import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCompLinkComponent } from './all-comp-link/all-comp-link.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCompLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
