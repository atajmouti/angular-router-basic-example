import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SidebarOneComponent } from './route-one/sidebar-one/sidebar-one.component';
import { SidebarTwoComponent } from './route-two/sidebar-two/sidebar-two.component';
import { ContentOneComponent } from './route-one/content-one/content-one.component';
import { ContentTwoComponent } from './route-two/content-two/content-two.component';

@NgModule({
  declarations: [ AppComponent, NavComponent, HomeComponent, RouteTwoComponent, RouteOneComponent, SidebarOneComponent, SidebarTwoComponent, ContentOneComponent, ContentTwoComponent],
  imports: [ 
    AppRoutingModule, 
    BrowserModule, FormsModule, HttpModule 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
