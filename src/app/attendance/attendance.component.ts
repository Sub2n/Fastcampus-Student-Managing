import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/students.interface';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  maxDays = [];
  days = [];
  studentsData: Student[];


  constructor(private http: HttpClient) {
    this.makeDay();
  }

  ngOnInit() {
    this.http.get<Student[]>('http://localhost:3000/students')
      .subscribe(data => this.studentsData = data);
  }


  makeDay() {
    for (let a = 1; a < 13; a++) {
      const b = new Date(2019, a, 0)
      this.maxDays = [...this.maxDays, b.getDate()]
    }
    for (let i = 1; i <= this.maxDays[5]; i++) {
      this.days = [...this.days, { year: 2019, month: 6, day: i }];
    }
  }
}
