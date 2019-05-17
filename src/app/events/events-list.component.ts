import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events = [
    // tslint:disable-next-line:max-line-length
    { name: 'Angular Connect', date: '9/26/2036', time: '10:00 am', location: { address: '1 London Road ', city: 'London', country: 'England' } },
    { name: 'ng-conf 2037', date: '4/15/2037', time: '9:00 am', onlineUrl: 'https://www.ng-conf.org/' },
    { name: 'Future Conf (Location/Url TBD)', date: '6/10/2037', time: '8:00 am' },
    { name: 'ng-nl', date: '4/15/2037', time: '9:00 am', onlineUrl: 'http://ng-nl.org/' },
    // tslint:disable-next-line:max-line-length
    { name: 'UN Angular Summit', date: '6/10/2037', time: '8:00 am', location: { address: 'The UN Angular Center', city: 'New York', country: 'USA' }, onlineUrl: 'http://unangularsummit.org' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
