import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router) {}
  fname: any = localStorage.getItem('fname');
  lname: any = localStorage.getItem('lname');

  ngOnInit(): void {}
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
