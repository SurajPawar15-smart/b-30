import { NgClass, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [NgFor, NgClass],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {
  //http=inject(HttpClient);
  userList: any[] = [];
  todoItemList: any[] = [];
  locationArray: any[] = [];

  constructor(private http: HttpClient) {
    debugger;
    this.getJsonUsers();
    this.getTodoItems();
    this.getAllLocations();
  }

  getJsonUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (res: any) => {
        this.userList = res;
      },
      error: (err: any) => {
        console.error('API Error:', err);
      },
      complete: () => {
        console.log('User API call completed');
      },
    });
  }

  getTodoItems() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      next: (res: any) => {
        this.todoItemList = res;
      },
      error: (err: any) => {
        console.error('API Error:', err);
      },
      complete: () => {
        console.log('Todo API call completed');
      },
    });
  }

  getAllLocations() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusLocations').subscribe({
      next: (res: any) => {
        this.locationArray = res;
      },
      error: (err: any) => {
        console.error('Location API Error', err);
      },
      complete: () => {
        console.log('User API call completed');
      },
    });
  }
}
