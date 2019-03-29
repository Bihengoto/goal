import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import {HttpClientModule} from '@angular/common/http';
import {AlertsService} from './alert-service/alerts.service'
import { RouterModule, Routes } from '@angular/router';
import {RoutingModule} from './routing/routing.module';



import {FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes:Routes=[
  {path:"goals",component:GoalComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/goals",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
    RouterModule.forRoot(routes)
  ],

  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
