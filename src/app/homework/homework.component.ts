import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css'],
})
export class HomeworkComponent implements OnInit {
  showSide = false;
  showInput = false;
  constructor() {}

  ngOnInit() {}

  showSidebar(state: any) {
    this.showSide = state[0];
    this.showInput = state[1];
  }
}
