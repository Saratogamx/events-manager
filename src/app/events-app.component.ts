import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {
  title = 'Events App';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
