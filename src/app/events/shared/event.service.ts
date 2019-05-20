// Importing Angular libraries
import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

// Importing Models
import { IEvent } from './event.model';
import { ISession } from './session.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`/api/events/${id}`)
      .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  saveEvent(event) {
    // Specifies headers of the "post" call
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('/api/events', event, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>(`/api/sessions/search?search=${searchTerm}`)
      .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }

  // Error handling in http requests
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
