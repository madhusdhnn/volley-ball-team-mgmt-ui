import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  showPassword: boolean = false;

  username: string = '';
  usernameInvalid: boolean = false;

  password: string = '';
  passwordInvalid: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  togglePasswordIcon() {
    this.showPassword = !this.showPassword;
  }

  changeUsername(val: string) {
    if (this.usernameInvalid) {
      this.usernameInvalid = false;
    }
    this.username = val;
  }

  changePassword(val: string) {
    if (this.passwordInvalid) {
      this.passwordInvalid = false;
    }
    this.password = val;
  }

  clearForm() {
    this.username = '';
    this.usernameInvalid = false;
    this.password = '';
    this.passwordInvalid = false;
  }

  submitLoginForm() {
    let isError = false;
    if (!this.username) {
      this.usernameInvalid = true;
      isError = true;
    }
    if (!this.password) {
      this.passwordInvalid = true;
      isError = true;
    }

    if (!isError) {
      this.authService
        .login(this.username, this.password)
        .subscribe((result) => {
          if (result) {
            this.clearForm();
            this.router.navigate(['/dashboard']);
          }
        });
    }
  }
}
