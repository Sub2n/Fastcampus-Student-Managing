import { Component, OnInit, Input } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Student } from '../models/students.interface';
import { HttpClient } from '@angular/common/http';
import { Day } from '../models/day';

@Component({
  selector: 'app-homework-side',
  templateUrl: './homework-side.component.html',
  styleUrls: ['./homework-side.component.css'],
})
export class HomeworkSideComponent implements OnInit {
  @Input() isShow: boolean;
  @Input() showInput: boolean;
  @Input() day: Day[];
  @Input() student: Student[];
  studentsData: Student[];

  public apiUrl = environment.apiUrl;
  public homeworkForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.homeworkForm = this.formBuilder.group({
      homework: ['', [Validators.required, Validators.maxLength(20)]],
    });
    this.getData();
  }

  getData() {
    this.http
      .get<Student[]>(`${this.apiUrl}/students`)
      .subscribe(data => (this.studentsData = data));
  }

  // select(e: HTMLSelectElement, person: any, day: any) {
  //   this.http.patch(`http://localhost:3000/students/${person.id}`, { attendance: { ...person.attendance, [`${day.year}${day.month}${day.day}`]: e.options[e.selectedIndex].value } })
  //     .subscribe(() => this.getData())
  // }

  onSubmit(value: any) {
    console.log(value.homework);
    console.log(this.studentsData);
    console.log(this.day);
    console.log(this.day.all);
    // this.http
    //   .put(`${this.apiUrl}/students`, {
    //     homework: {
    //       ...student.homework,
    //       [`${this.day.all}`]: value.homework,
    //     },
    //   })
    //   .subscribe(() => this.getData());
    this.studentsData.forEach(student => {
      this.http
        .patch(`${this.apiUrl}/students/${student.id}`, {
          homework: {
            ...student.homework,
            [this.day.all]: value.homework,
          },
        })
        .subscribe(() => this.getData());
    });
  }

  // getShowSide() {
  //   this.studentsService
  //     .getShowSide()
  //     .subscribe(state => (this.isShow = state));
  // }
}
