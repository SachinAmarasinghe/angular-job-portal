import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})
export class LoginComponent implements OnInit {
  signinform!: FormGroup;
  isLoggingIn = false;
  logginError = '';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signinform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    this.isLoggingIn = true;
    this.auth
      .login(this.signinform.value.email, this.signinform.value.password)
      .then(
        (successMessage) => {
          this.isLoggingIn = false;
          this.router.navigate(['dashboard']);
          console.log(successMessage);
        },
        (errorMessage) => {
          this.isLoggingIn = false;
          this.logginError = errorMessage;
        }
      );
  }
}
