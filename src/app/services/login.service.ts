import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Manager } from '../models/manager';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogin: boolean;
  classId: number;
  apiUrl = environment.apiUrl;
  managers: Manager[];

  constructor(public http: HttpClient) {
    if (JSON.parse(localStorage.getItem('login'))) this.isLogin = true;
    else this.isLogin = false;
    this.getManagers();
  }

  getManagers() {
    this.http
      .get<Manager[]>(`${this.apiUrl}/manager`)
      .subscribe(users => (this.managers = users));
  }

  login(id: string, pw: string) {
    const manager = this.managers.find(
      manager => manager.email === id && manager.password === pw
    );

    if (manager) {
      this.isLogin = true;
      this.classId = manager.classId;
    } else this.isLogin = false;

    console.log(this.isLogin);

    // this.managers.find(
    //   manager => manager.email === id && manager.password === pw
    // );
  }

  getLoginStatus(): Observable<boolean> {
    return of(this.isLogin);
  }

  setLoginStatus(state: boolean) {
    this.isLogin = state;
  }

  getIsLogin(): boolean {
    return this.isLogin;
  }
}
