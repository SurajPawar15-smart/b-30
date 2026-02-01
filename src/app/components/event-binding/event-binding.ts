import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-binding',
  imports: [FormsModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  courseName: string = 'Angular 20';
  courseDuration = '3 Months';
  latestVersion: string;
  isActive: boolean = false;
  myPlaceholder = 'Enter surname';
  inputText = 'radio';
  myclassText = 'bg-warning p-3';
  studObj = {
    name: 'Suraj',
    city: 'Pune',
    mobile: 7778765457,
  };
  cityList: string[] = ['Pune', 'Mumbai', 'kolkata', 'delhi'];
  constructor() {
    this.latestVersion = 'Angular 20 Version';
  }
  showWelcomeMessage() {
    alert('welcome b-30');
  }
  showMessage(message: string) {
    alert(message);
  }
  cityChanged() {
    alert('City got changed');
  }
  onTextChanges() {
    console.log('Text changes');
  }
  onMouseEnter() {
    console.log('on mouse changes');
  }
  onMouseLeft() {
    console.log('on mouse left');
  }
  onCourseChange() {
    const name = (this.courseName = 'ReactJS');
    console.log(name);
  }
}
