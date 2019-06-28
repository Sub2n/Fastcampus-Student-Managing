import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Student {
  id: number;
  name: string;
  classId: number;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  maxDays = [];
  days = [];
  persons = [
    { id: 1, name: "최성진" },
    { id: 2, name: "한현진" },
    { id: 3, name: "박수빈" },
    { id: 4, name: "김둘리" },
    { id: 5, name: "신짱구" },
    { id: 6, name: "김자두" },
    { id: 7, name: "이기영" },
    { id: 8, name: "이규하" },
    { id: 9, name: "허범성" },
    { id: 10, name: "이수영" },
    { id: 11, name: "조항민" },
    { id: 12, name: "최코난" },
    { id: 13, name: "김퉁퉁" },
    { id: 14, name: "김스폰지밥" },
    { id: 15, name: "한루피" },
    { id: 16, name: "유깐깐찡어" },
    { id: 17, name: "김초파" },
    { id: 18, name: "박나미" },
    { id: 19, name: "서문탁" },
    { id: 20, name: "이샤론" }
  ]

  studentsData: Student[];


  constructor(private http: HttpClient) {
    this.makeDay();
  }

  ngOnInit() {
    this.http.get<Student[]>('http://localhost:3000/students')
      .subscribe(data => this.studentsData = data);

    setTimeout(() => {
      console.log(this.studentsData);
    }, 2000);
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
