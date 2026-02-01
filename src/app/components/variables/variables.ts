import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  //String,Number,Boolean,Date,NaN,undefined,null

  //1. declaration + initialization
  courseName: string = 'Angular 20';
  rollNo: number = 100;
  isActive: boolean = false;
  currentDate = new Date();

  //2. declaration
  courseDuration: string;
  productPrice: number;

  //3. initialization
  productName = 'Moto a-2 Mobile';
  student: any;

  firstName: string = 'Suraj';
  lastName: string = 'Pawar';
  fullName: string = '';

  constructor() {
    this.fullName = this.firstName + '' + this.lastName;

    this.courseDuration = '3 months';
    this.productPrice = 12000.0;
    this.courseName = '222';
    this.isActive = false;
    console.log(this.productPrice);

    //this.productName=1234;
    this.student = '2344';
    this.student = 'Suraj';

    this.showWelcomeMessage();
    this.showMessage('welcome');
    const result = this.addTwoNum(12, 24);
    console.log(result);
  }

  showWelcomeMessage() {
    alert('Welcome b-30');
  }
  showMessage(message: string): void {
    alert(message);
  }
  addTwoNum(num1: number, num2: number): number {
    return num1 + num2;
  }
}
