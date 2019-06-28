import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/students.interface';
import { Day } from '../models/day';

@Component({
  selector: 'app-homework-calender',
  templateUrl: './homework-calender.component.html',
  styleUrls: ['./homework-calender.component.css'],
})
export class HomeworkCalenderComponent implements OnInit {
  isShow: boolean;
  @Output() showInput = new EventEmitter();
  @Output() showHome = new EventEmitter();

  maxDays = [];
  days = [];
  presentMonth: number;
  presentYear: number;
  studentsData: Student[];
  touchHomework: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Student[]>('http://localhost:3000/students')
      .subscribe(data => (this.studentsData = data));

    this.presentMonth = new Date().getMonth();
    this.presentYear = new Date().getFullYear();
    this.makeDay();

    this.isShow = false;
    this.touchHomework = false;
  }

  showSide() {}

  increase() {
    if (this.presentMonth === 11) {
      this.presentYear++;
      this.presentMonth = 0;
    } else this.presentMonth++;
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

  makeDay() {
    this.days = [];
    for (let a = 1; a < 13; a++) {
      const b = new Date(this.presentYear, a, 0);
      this.maxDays = [...this.maxDays, b.getDate()];
    }
    for (let i = 1; i <= this.maxDays[this.presentMonth]; i++) {
      this.days = [
        ...this.days,
        {
          year: this.presentYear,
          month: this.presentMonth + 1,
          day: i,
          all: `${this.presentYear}${this.presentMonth + 1}${i}`,
        },
      ];
    }
  }

  addHomework(day: Day) {
    this.isShow = !this.isShow;
    this.touchHomework = true;
    this.showInput.emit([this.isShow, this.touchHomework, day]);
  }

  showHomework(student: Student, day: Day) {
    console.log(student, day);

    this.isShow = !this.isShow;
    this.touchHomework = false;
    this.showHome.emit([this.isShow, this.touchHomework, day, student]);
  }
}
