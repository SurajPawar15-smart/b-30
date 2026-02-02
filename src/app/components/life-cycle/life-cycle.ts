import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  courseName: string = 'ReactJS';
  intervalId: any;
  constructor() {
    console.log('1️⃣ Constructor called');

    // Simulate async data update
    this.intervalId = setTimeout(() => {
      this.courseName = 'AngularJS';
      console.log('⏳ Course name updated after 3 seconds');
    }, 3000);
  }

  ngOnInit(): void {
    console.log('2️⃣ ngOnInit → API calls, initial data setup');
  }

  ngAfterContentInit(): void {
    console.log('3️⃣ ngAfterContentInit → ng-content initialized');
  }

  ngAfterContentChecked(): void {
    console.log('4️⃣ ngAfterContentChecked → content checked');
  }

  ngAfterViewInit(): void {
    console.log('5️⃣ ngAfterViewInit → View & child components loaded');
  }

  ngAfterViewChecked(): void {
    console.log('6️⃣ ngAfterViewChecked → View checked');
  }

  ngOnDestroy(): void {
    console.log('7️⃣ ngOnDestroy → Cleanup before component destroy');
    clearTimeout(this.intervalId);
  }
}
