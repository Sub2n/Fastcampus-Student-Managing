import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Manager } from '../models/manager';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogin = true;
  apiUrl = environment.apiUrl;
  managers: Manager[];

  constructor(public http: HttpClient) { }

  getManagers() {
    this.http
      .get<Manager[]>(`${this.apiUrl}/manager`)
      .subscribe(users => (this.managers = users));
  }

  getLoginStatus(): Observable<boolean> {
    return of(this.isLogin);
  }

  setLoginStatus(state: boolean) {
    this.isLogin = state;
  }
}
