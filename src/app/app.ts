import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { Variables } from './components/variables/variables';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Variables],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('b-30');
}
