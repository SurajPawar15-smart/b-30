import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { Variables } from './components/variables/variables';
import { admin } from './components/admin/admin';
import { EventBinding } from './components/event-binding/event-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Variables, admin, EventBinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('b-30');
}
