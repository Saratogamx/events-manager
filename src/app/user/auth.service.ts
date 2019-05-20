import { Injectable } from '@angular/core';

// Importing Model for User
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Papa',
      userName: userName
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
