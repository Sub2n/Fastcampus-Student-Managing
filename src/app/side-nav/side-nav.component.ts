import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  classId: number;
  userName: string;
  className: string;
  apiUrl: string;
  constructor(private http: HttpClient, private loginService: LoginService) {}

  ngOnInit() {
    this.classId = JSON.parse(localStorage.getItem('classId'));
    this.userName = JSON.parse(localStorage.getItem('userName'));
    this.apiUrl = environment.apiUrl;
    this.http.get<any[]>(`${this.apiUrl}/class`).subscribe(classes => {
      this.className = classes.find(classI => classI.id === this.classId).name;
    });
  }
}
