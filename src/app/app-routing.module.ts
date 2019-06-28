import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { HomeworkComponent } from './homework/homework.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'homework', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'homework', component: HomeworkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
