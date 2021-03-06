import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot) {
    return this.eventService.getEvents();
  }

}
