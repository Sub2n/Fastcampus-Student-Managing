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
  presentMonth: number
  presentYear: number
  studentsData: Student[];
  thisDate: string;
  attend = [
    { value: 4, attend: "선택" },
    { value: 0, attend: "출석" },
    { value: 1, attend: "지각" },
    { value: 2, attend: "결석" }
  ]


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Student[]>('http://localhost:3000/students')
      .subscribe(data => this.studentsData = data);

    this.presentMonth = new Date().getMonth();
    this.presentYear = new Date().getFullYear();
    this.makeDay();
  }

  getData() {
    this.http.get<Student[]>('http://localhost:3000/students')
      .subscribe(data => this.studentsData = data);
  }


  makeDay() {
    this.days = [];
    for (let a = 1; a < 13; a++) {
      const b = new Date(this.presentYear, a, 0)
      this.maxDays = [...this.maxDays, b.getDate()]
    }
    for (let i = 1; i <= this.maxDays[this.presentMonth]; i++) {
      this.days = [...this.days, { year: this.presentYear, month: this.presentMonth + 1, day: i, all: `${this.presentYear}${this.presentMonth + 1}${i}` }];
    }
  }

  increase() {
    if (this.presentMonth === 11) {
      this.presentYear++;
      this.presentMonth = 0;
    }
    else this.presentMonth++;
    this.makeDay();
  }

  decrease() {
    if (this.presentMonth === 0) {
      this.presentYear--;
      this.presentMonth = 11;
      return;
    }
    this.presentMonth--;
    this.makeDay();
  }

  select(e: HTMLSelectElement, person: any, day: any) {
    this.http.patch(`http://localhost:3000/students/${person.id}`, { attendance: { ...person.attendance, [`${day.year}${day.month}${day.day}`]: e.options[e.selectedIndex].value } })
      .subscribe(() => this.getData())
  }

  load(a: any) {
    console.log(Object.keys(a));
  }
}
