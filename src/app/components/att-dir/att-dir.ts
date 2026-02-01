import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-att-dir',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './att-dir.html',
  styleUrl: './att-dir.css',
})
export class AttDir {
  div1BgClassName: string = 'bg-danger'; //bg-success
  isChecked: boolean = true;
  num1 = '';
  num2 = '';
  studentList = [
    {
      name: 'Rahul Sharma',
      grade: 'A',
      city: 'Pune',
      mobile: '9876543210',
      isActive: true,
    },
    {
      name: 'Anita Patil',
      grade: 'B',
      city: 'Mumbai',
      mobile: '9123456789',
      isActive: false,
    },
    {
      name: 'Suresh Kumar',
      grade: 'A+',
      city: 'Delhi',
      mobile: '9988776655',
      isActive: false,
    },
    {
      name: 'Neha Joshi',
      grade: 'A',
      city: 'Nagpur',
      mobile: '9012345678',
      isActive: true,
    },
    {
      name: 'Amit Verma',
      grade: 'C',
      city: 'Bangalore',
      mobile: '8899776655',
      isActive: true,
    },
    {
      name: 'Priya Singh',
      grade: 'B+',
      city: 'Hyderabad',
      mobile: '7766554433',
      isActive: true,
    },
  ];

  backColor: string = 'yellow';
  myCssObj = {
    color: 'white',
    'background-color': 'teal',
    'front-size': '31px',
  };

  toggleDiv1() {
    this.div1BgClassName = this.div1BgClassName == 'bg-primary' ? 'bg-secondary' : 'bg-danger';
  }
}
