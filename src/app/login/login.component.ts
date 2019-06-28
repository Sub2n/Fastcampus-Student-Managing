import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public message: string;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
          ),
        ],
      ],
      pw: [
        '',
        [
          Validators.required,
          Validators.pattern(/[a-zA-Z0-9]/),
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  onSubmit(value: any) {
    console.log('[payload]', this.loginForm.value);
    this.auth.signin(this.loginForm.value).subscribe(
      () => this.router.navigate(['dashboard']),
      ({ error }) => {
        console.log(error.message);
        this.message = error.message;
      }
    );
  }
  get id() {
    return this.loginForm.get('id');
  }

  get pw() {
    return this.loginForm.get('pw');
  }
}
