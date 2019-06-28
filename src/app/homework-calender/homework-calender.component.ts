import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  showSide() {
    this.isShow = !this.isShow;
    this.show.emit(this.isShow);
  }

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
  constructor() {
    this.makeDay();
  }

  ngOnInit() {
    this.isShow = false;
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
