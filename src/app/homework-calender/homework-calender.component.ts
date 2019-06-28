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
  presentMonth: number
  presentYear: number

  constructor() {

  }

  ngOnInit() {
    this.presentMonth = new Date().getMonth();
    this.presentYear = new Date().getFullYear();
    this.makeDay();

    this.isShow = false;

  }

  showSide() {
    this.isShow = !this.isShow;
    this.show.emit(this.isShow);
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
    { id: 14, name: "스폰지" },
    { id: 15, name: "한루피" },
    { id: 16, name: "깐깐찡" },
    { id: 17, name: "김초파" },
    { id: 18, name: "박나미" },
    { id: 19, name: "서문탁" },
    { id: 20, name: "이샤론" }
  ]



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





}
