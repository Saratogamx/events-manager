import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';

// Importing models for session and user
import { ISession } from '../shared/session.model';
import { IUser } from 'src/app/user/user.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  userHasVoted(session: ISession, voterName: string) {
    // Returns true/false if voterName is in the voters array
    return session.voters.some(voter => voter === voterName);
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    // Performs the post HTTP request to add user into the voters array
    this.http.post(url, {}, options)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    // Re-assigns voters array with voters array except specified voterName
    session.voters = session.voters.filter(voter => voter !== voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url)
      .pipe(catchError(this.handleError('deleteVoter')))
      .subscribe();
  }

  // Error handling in http requests
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
