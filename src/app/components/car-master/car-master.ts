import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../services/car';

@Component({
  selector: 'app-car-master',
  imports: [FormsModule],
  templateUrl: './car-master.html',
  styleUrl: './car-master.css',
})
export class CarMaster {
  carList: any[] = [];
  http = inject(HttpClient);
  carObj: any = {
    carId: 0,
    brand: '',
    model: '',
    year: 0,
    color: '',
    dailyRate: 0,
    carImage: '',
    regNo: '',
  };

  constructor(private CarService: Car) {
    this.getCars();
    const role = this.CarService.loggedUserRole;
  }

  getCars() {
    this.http.get('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars').subscribe({
      next: (res: any) => {
        this.carList = res.data;
      },
      error: (err: any) => {
        alert('Cars get failed ❌ ' + err.message);
      },
    });
  }

  onSaveCar() {
    this.http
      .post('https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar', this.carObj)
      .subscribe({
        next: (res: any) => {
          this.carList = res.data;
          this.getCars();
        },
        error: (err: any) => {
          alert('car not created');
        },
      });
  }
  updateCars() {
    // this.http
    //   .put('https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar', this.carObj)
    //   .subscribe({
    //     next: (res: any) => {
    //       alert('Car Data Updated');
    //       this.getCars();
    //     },
    //     error: (err: any) => {
    //       alert('Cars updated failed ❌ ' + err.message);
    //     },
    //   });
    this.CarService.updateCar(this.carObj).subscribe({
      next: (res: any) => {
        alert('Car Data Updated');
        this.getCars();
      },
      error: (err: any) => {
        alert('Cars updated failed ❌ ' + err.message);
      },
    });
  }

  onEdit(data: any) {
    this.carObj = { ...data };
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete?')) {
      this.http
        .delete(
          'https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carId=' + id,
        )
        .subscribe({
          next: () => {
            alert('Cars details deleted 🗑️');
            this.getCars();
          },
          error: () => {
            alert('Delete failed ❌');
          },
        });
    }
  }
}
