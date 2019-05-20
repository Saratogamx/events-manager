import { Injectable } from '@angular/core';

// Importing models for session and user
import { ISession } from '../shared/session.model';
import { IUser } from 'src/app/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  userHasVoted(session: ISession, voterName: string) {
    // Returns true/false if voterName is in the voters array
    return session.voters.some(voter => voter === voterName);
  }

  addVoter(session: ISession, voterName: string) {
    // Pushes voterName into the session's voters array
    session.voters.push(voterName);
  }

  deleteVoter(session: ISession, voterName: string) {
    // Re-assigns voters array with voters array except specified voterName
    session.voters = session.voters.filter(voter => voter !== voterName);
  }
}
