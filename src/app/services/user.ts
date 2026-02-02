import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http: HttpClient) {}

  getJsonUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getSum(num1: number, num2: number) {
    return num1 + num2;
  }
}
