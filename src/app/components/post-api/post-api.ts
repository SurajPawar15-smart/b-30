import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
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
          alert('Location created');
        },
        error: (err: any) => {},
        complete: () => {},
      });
  }

  getAllLocation() {
    this.isLoading = true;
    this.errorMsg = '';
    debugger;
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusLocations').subscribe({
      next: (res: any) => {
        debugger;
        alert('Get all the Location');
      },
      error: (err: any) => {
        console.error(err);
        this.errorMsg = 'Failed to fetch locations';
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
