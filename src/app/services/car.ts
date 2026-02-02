import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Car {
  loggedUserRole: string = 'Super-Admin';
  constructor(private http: HttpClient) {}

  updateCar(obj: any) {
    return this.http.put('https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar', obj);
  }
}
