import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Car {
  loggedUserRole: string = 'Super-Admin';
  constructor(private http: HttpClient) {}

  saveNewCar(obj: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar',
      obj,
    );
  }
  getAllCars() {
    return this.http.get('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars');
  }
  updateCar(obj: any) {
    return this.http.put('https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar', obj);
  }
  deleteCar(id: number) {
    return this.http.delete(
      'https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?=carId' + id,
    );
  }
}
