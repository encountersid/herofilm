import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { BikedetailsComponent } from './bikedetails/bikedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadernavComponent,
    SidebarComponent,
    MainnavComponent,
    BikedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
