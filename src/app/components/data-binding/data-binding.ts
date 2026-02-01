import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular';
  courseDuration = '3 months';
  latestVersion: string;
  isActive: boolean = false;
  myPlaceholdertext = 'Enter Surname';
  inputType = 'radio';
  myClassName = 'bg-primary p-3';
  constructor() {
    this.latestVersion = 'angular 20';
  }
}
