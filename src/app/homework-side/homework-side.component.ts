import { Component, OnInit, Input } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homework-side',
  templateUrl: './homework-side.component.html',
  styleUrls: ['./homework-side.component.css'],
})
export class HomeworkSideComponent implements OnInit {
  @Input() isShow: boolean;
  @Input() showInput: boolean;
  public homeworkForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.homeworkForm = this.formBuilder.group({
      homework: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  onSubmit(value: any) { }

  // getShowSide() {
  //   this.studentsService
  //     .getShowSide()
  //     .subscribe(state => (this.isShow = state));
  // }
}
