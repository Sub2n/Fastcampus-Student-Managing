// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/* 3rd party modules */
// https://github.com/auth0/angular2-jwt
import { JwtHelper } from 'angular2-jwt';

// Components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { HomeworkComponent } from './homework/homework.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeworkSideComponent } from './homework-side/homework-side.component';
import { HomeworkCalenderComponent } from './homework-calender/homework-calender.component';

// Services
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';

// Guards
import { AuthGuard } from './guards/auth.guard';

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
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, LoginService, AuthGuard, JwtHelper],
  bootstrap: [AppComponent],
})
export class AppModule {}
