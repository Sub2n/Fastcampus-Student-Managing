import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homework-calender',
  templateUrl: './homework-calender.component.html',
  styleUrls: ['./homework-calender.component.css'],
})
export class HomeworkCalenderComponent implements OnInit {
  isShow: boolean;
  @Output() show = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.isShow = false;
  }

  showSide() {
    this.isShow = !this.isShow;
    this.show.emit(this.isShow);
  }
}
