import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { HomeworkComponent } from './homework/homework.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeworkSideComponent } from './homework-side/homework-side.component';
import { HomeworkCalenderComponent } from './homework-calender/homework-calender.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ManageComponent,
    AttendanceComponent,
    HomeworkComponent,
    SideNavComponent,
    HomeworkSideComponent,
    HomeworkCalenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
