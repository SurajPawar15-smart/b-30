import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-old-angular',
  imports: [FormsModule, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './old-angular.html',
  styleUrl: './old-angular.css',
})
export class OldAngular {
  isDiv1Visible: boolean = false;
  div2Status: string = 'Show';
  isDiv3Visible: boolean = false;
  startingCharDayName = '';
  cityList: string[] = ['Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'];
  studentList = [
    {
      name: 'Rahul Sharma',
      grade: 'A',
      city: 'Pune',
      hobbies: 'Reading, Cricket',
      mobile: '9876543210',
    },
    {
      name: 'Anita Patil',
      grade: 'B',
      city: 'Mumbai',
      hobbies: 'Drawing, Music',
      mobile: '9123456789',
    },
    {
      name: 'Suresh Kumar',
      grade: 'A+',
      city: 'Delhi',
      hobbies: 'Coding, Chess',
      mobile: '9988776655',
    },
    {
      name: 'Suraj Kumar',
      grade: 'A+',
      city: 'Pune',
      hobbies: 'Singing, Chess',
      mobile: '9988776655',
    },
  ];

  hideDiv() {
    this.isDiv1Visible = false;
  }
  showDiv() {
    this.isDiv1Visible = true;
  }
  toggleDiv2() {
    // if (this.div2Status == 'Show') {
    //   this.div2Status = 'hide';
    // } else {
    //   this.div2Status = 'Show';
    // }
    this.div2Status = this.div2Status == 'Show' ? 'Hide' : 'Show';
  }
  toggleDiv3() {
    //this.isDiv3Visible = this.isDiv3Visible == true ? false : true;
    this.isDiv3Visible = !this.isDiv3Visible;
  }
}
