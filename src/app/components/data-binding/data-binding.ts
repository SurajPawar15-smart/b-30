import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular';
  courseDuration = '3 months';
  latestVersion: string;
  isActive: boolean = false;
  myPlaceholdertext = 'Enter Surname';
  inputType = 'radio';
  myClassName = 'bg-primary p-3';
  userList: any[] = [];

  http = inject(HttpClient);
  constructor() {
    this.latestVersion = 'angular 20';
  }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (res: any) => {
        this.userList = res;
      },
      error: (err) => {
        console.error('Error fetching users', err);
      },
    });
  }
}
