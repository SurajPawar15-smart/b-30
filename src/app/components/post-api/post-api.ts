import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, NgIf],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css',
})
export class PostApi {
  http = inject(HttpClient);
  locationArray: any[] = [];
  isLoading = false;
  errorMsg = '';
  newLocationObj: any = {
    locationId: 0,
    locationName: '',
    code: '',
  };

  constructor() {
    this.getAllLocation();
  }
  onSaveLocation() {
    this.http
      .post('https://api.freeprojectapi.com/api/BusBooking/PostBusLocation', this.newLocationObj)
      .subscribe({
        next: (res: any) => {
          alert('Location created ✅');
          this.resetForm();
          this.getAllLocation();
        },
        error: (err: any) => {
          alert('Create failed ❌');
        },
        complete: () => {},
      });
  }

  getAllLocation() {
    this.isLoading = true;
    this.errorMsg = '';
    //debugger;
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusLocations').subscribe({
      next: (res: any) => {
        //debugger;
        this.locationArray = res;
        alert('Get all the Location');
      },
      error: (err: any) => {
        console.error(err);
        this.errorMsg = 'Failed to fetch locations ❌';
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onEdit(data: any) {
    //this.newLocationObj.data;
    this.newLocationObj = { ...data };
  }
  onUpdate() {
    this.http
      .post('https://api.freeprojectapi.com/api/BusBooking/PostBusLocation', this.newLocationObj)
      .subscribe({
        next: () => {
          alert('Location updated ✅');
          this.resetForm();
          this.getAllLocation();
        },
        error: (err) => {
          alert('Update failed ❌ ' + err.message);
        },
      });
  }

  onDelete(id: number) {
    const isConfirm = confirm('Are you sure want to Delete ?');
    if (isConfirm) {
      this.http
        .delete('https://api.freeprojectapi.com/api/BusBooking/DeleteBusLocation?locationId=' + id)
        .subscribe({
          next: (res: any) => {
            alert('Location deleted');
            this.getAllLocation();
          },
          error: () => {
            alert('Delete failed ❌');
          },
        });
    }
  }
  resetForm() {
    this.newLocationObj = {
      locationId: 0,
      locationName: '',
      code: '',
    };
  }
}
