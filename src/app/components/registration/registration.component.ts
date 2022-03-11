import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  @ViewChild('signUp', { static: false })
  error: string = '';
  FirstName: string = '';
  LastName: string = '';
  register_phone_number: string = '';
  Email: string = '';
  CreatePassword: string = '';
  signUp: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  loading = false;

  registerData(form: NgForm) {
    if (form.valid) {
      this.FirstName = form.value.FirstName;
      this.LastName = form.value.LastName;
      this.register_phone_number = form.value.register_phone_number;
      this.Email = form.value.Email;
      this.CreatePassword = form.value.CreatePassword;

      localStorage.setItem('fname', this.FirstName);
      localStorage.setItem('lname', this.LastName);
      localStorage.setItem('phonenumber', this.register_phone_number);
      localStorage.setItem('email', this.Email);
      localStorage.setItem('password', this.CreatePassword);

      this.signUp = 'Sign Up Successful';
      this.loading = true;
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      this.error = 'User Data is Invalid';
    }
  }
}
