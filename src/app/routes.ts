import { Routes } from '@angular/router';

// Importing application components
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { ErrNotfoundComponent } from './errors/err-notfound.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';

// Importing services
import { EventsListResolverService } from './events/events-list-resolver.service';
import { EventResolverService } from './events/event-resolver.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolverService } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: ErrNotfoundComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: '**', redirectTo: '/events', pathMatch: 'full' }
];
