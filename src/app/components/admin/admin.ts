import { Component, inject } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-admin',
  imports: [],
  template: `
    <h1>Hello Admin</h1>
    <p class="primary">This is a para</p>
  `,
  styles: ['.primary{color:red;}'],
})
export class admin {
  courseName: string = 'Samsun Laptop';
  userList: any[] = [];
  userService = inject(User);

  constructor() {
    console.log(this.courseName);
  }

  getUsers() {
    this.userService.getJsonUser().subscribe({
      next: (res: any) => {
        this.userList = res;
      },
      error: (err) => {
        console.error('Error fetching users', err);
      },
    });
  }
}
