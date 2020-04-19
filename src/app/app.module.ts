import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from './_alert';

import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SgGridComponent } from './controls/sg-grid/sg-grid.component';
import { ApiManagerService } from './services/common/api-manager.service';
import { GridColumnFilterPipe } from './pipes/grid-column-filter.pipe';
import { CourseService } from './services/courses/course.service';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    AboutComponent,
    SgGridComponent,
    GridColumnFilterPipe,
    CourseComponent
  ],
  providers: [
    ApiManagerService,
    CourseService,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
