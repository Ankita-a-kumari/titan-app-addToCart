import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('logIn', { static: false })
  error: string = '';
  email: string = '';
  password: string = '';
  token: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  loading = false;
  login: string = '';
  login1: string = '';
  loginData(form: NgForm) {
    if (form.valid) {
      this.email = form.value.email;
      this.password = form.value.password;

      var storageemail = localStorage.getItem('email');

      var storagepassword = localStorage.getItem('password');
      this.token = localStorage.setItem('token', this.email);
      if (this.email == storageemail && this.password == storagepassword) {
        this.login = 'Login Successful';
        this.loading = true;

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      } else if (this.email != storageemail) {
        this.login = 'Email is Wrong';
      } else if (this.password != storagepassword) {
        this.login1 = 'Password is Wrong';
      } else {
        this.router.navigate(['/login']);
      }
    } else {
      this.error = 'User Data is Invalid';
    }
  }
}
