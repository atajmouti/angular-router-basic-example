import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },     
      { path: 'route-one', component: RouteOneComponent },      
      { path: 'route-two', component: RouteTwoComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


