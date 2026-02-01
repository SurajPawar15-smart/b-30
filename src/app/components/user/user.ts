import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  public courseName: string = 'Samsung';
  constructor() {
    console.log(this.courseName);
  }
}
