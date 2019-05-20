import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService } from '../events/shared/event.service';

// Importing model for users and sessions
import { IUser } from '../user/user.model';
import { ISession } from '../events/shared/session.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[];

  constructor(
    private authService: AuthService,
    private eventService: EventService
  ) { }

  ngOnInit() {}

  searchSessions(searchTerm: string) {
    this.eventService
      .searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });
  }

}
