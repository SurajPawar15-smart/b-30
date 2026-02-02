import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Car } from '../../services/car';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  carService = inject(Car);
  carList: any[] = [];
  isEditMode = false;
  newCarForm: FormGroup = new FormGroup({
    carId: new FormControl(0),
    brand: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    color: new FormControl(''),
    carImage: new FormControl(''),
    dailyRate: new FormControl(''),
    regNo: new FormControl(''),
  });
  constructor() {
    this.getCars();
  }
  getCars() {
    this.carService.getAllCars().subscribe({
      next: (res: any) => {
        this.carList = res.data;
      },
    });
  }
  // onEdit(car: any) {
  //   this.isEditMode = true;
  //   this.newCarForm.patchValue({
  //     carId: car.carId,
  //     brand: car.brand,
  //     model: car.model,
  //     year: car.year,
  //     color: car.color,
  //     dailyRate: car.dailyRate,
  //     carImage: car.carImage,
  //     regNo: car.regNo,
  //   });
  // }
  onDelete(carId: number) {
    if (!confirm('Are you sure you want to delete this car?')) {
      return;
    }

    this.carService.deleteCar(carId).subscribe({
      next: () => {
        alert('Car deleted successfully');
        this.getCars();
      },
    });
  }
  // onSaveCar() {
  //   const formValue = this.newCarForm.value;
  //   this.carService.saveNewCar(formValue).subscribe({
  //     next: (res: any) => {
  //       alert('Car created successfully');
  //     },
  //   });
  // }
  onSaveCar() {
    if (this.newCarForm.invalid) {
      return;
    }

    const formValue = this.newCarForm.getRawValue();

    if (this.isEditMode) {
      // UPDATE
      this.carService.updateCar(formValue).subscribe({
        next: () => {
          alert('Car updated successfully');
          this.afterSave();
        },
      });
    } else {
      // CREATE
      this.carService.saveNewCar(formValue).subscribe({
        next: () => {
          alert('Car created successfully');
          this.afterSave();
        },
      });
    }
  }
  afterSave() {
    this.isEditMode = false;
    this.newCarForm.reset({
      carId: 0,
      year: 0,
      dailyRate: 0,
    });
    this.getCars();
  }
  onEdit(car: any) {
    this.isEditMode = true;
    this.newCarForm.patchValue(car);
  }
  resetForm() {
    this.isEditMode = false;
    this.newCarForm.reset({
      carId: 0,
      brand: '',
      model: '',
      year: '',
      color: '',
      carImage: '',
      dailyRate: '',
      regNo: '',
    });
  }
}
