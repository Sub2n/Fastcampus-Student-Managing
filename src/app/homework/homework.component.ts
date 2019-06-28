import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Day } from '../models/day';
import { Student } from '../models/students.interface';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css'],
})
export class HomeworkComponent implements OnInit {
  showSide = false;
  showInput = false;
  day: Day[];
  student: Student;
  constructor() {}

  ngOnInit() {}

  showSidebar(state: any) {
    this.showSide = state[0];
    this.showInput = state[1];
    this.day = state[2];
    if (state[3]) this.student = state[3];
  }
}
