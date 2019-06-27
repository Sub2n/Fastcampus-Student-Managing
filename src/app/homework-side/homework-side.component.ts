import { Component, OnInit, Input } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-homework-side',
  templateUrl: './homework-side.component.html',
  styleUrls: ['./homework-side.component.css'],
})
export class HomeworkSideComponent implements OnInit {
  @Input() isShow: boolean;
  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    // this.getShowSide();
  }

  // getShowSide() {
  //   this.studentsService
  //     .getShowSide()
  //     .subscribe(state => (this.isShow = state));
  // }
}
