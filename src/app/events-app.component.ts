import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: `
    <navbar></navbar>
    <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'Events App';
}
