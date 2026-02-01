import { Component } from '@angular/core';

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

  constructor() {
    console.log(this.courseName);
  }
}
