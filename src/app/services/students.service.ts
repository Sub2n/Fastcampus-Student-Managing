import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  showSide = false;

  constructor() {}

  getShowSide(): Observable<boolean> {
    console.log(this.showSide);
    return of(this.showSide);
  }

  setShowSide(state: boolean) {
    this.showSide = state;
  }
}
