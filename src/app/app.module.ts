// Importing angular modules
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importing application components
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { ErrNotfoundComponent } from './errors/err-notfound.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { SimpleModalComponent } from './common/simple-modal.component';
import { UpvoteComponent } from './events/event-details/upvote.component';

// Injection token for toastr service
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
// Injection token for jQuery service
import { JQ_TOKEN } from './common/jQuery.service';

// Importing custom "modalTrigger" directive
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { LocationValidatorDirective } from './events/location-validator.directive';

// Importing custom pipes
import { DurationPipe } from './events/shared/duration.pipe';

// Importing file with routing rules
import { appRoutes } from './routes';

// Global value for toastr object
const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrNotfoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    LocationValidatorDirective
  ],
  providers: [
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    // Declaring TOASTR_TOKEN injection token as a provider
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  } else {
    return true;
  }
}
