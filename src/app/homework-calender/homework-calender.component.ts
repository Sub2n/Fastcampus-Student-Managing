import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/students.interface';

@Component({
  selector: 'app-homework-calender',
  templateUrl: './homework-calender.component.html',
  styleUrls: ['./homework-calender.component.css'],
})
export class HomeworkCalenderComponent implements OnInit {
  isShow: boolean;
  @Output() show = new EventEmitter();
  maxDays = [];
  days = [];
  presentMonth: number;
  presentYear: number;
  studentsData: Student[];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<Student[]>('http://localhost:3000/students')
      .subscribe(data => this.studentsData = data);

    this.presentMonth = new Date().getMonth();
    this.presentYear = new Date().getFullYear();
    this.makeDay();

    this.isShow = false;

  }

  showSide() {

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


  makeDay() {
    this.days = [];
    for (let a = 1; a < 13; a++) {
      const b = new Date(this.presentYear, a, 0)
      this.maxDays = [...this.maxDays, b.getDate()]
    }
    for (let i = 1; i <= this.maxDays[this.presentMonth]; i++) {
      this.days = [...this.days, { year: this.presentYear, month: this.presentMonth + 1, day: i }];
    }
  }

  addHomework() {
    this.isShow = !this.isShow;
    this.show.emit(this.isShow);
  }
}
