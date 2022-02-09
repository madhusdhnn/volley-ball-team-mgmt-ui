import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Profile from '../models/Profile';
import mockUser from '../mock-user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  // fetch user details from the JWT token
  fetchUserProfile(userId: string): Observable<Profile> {
    let user: Profile;
    if (userId === '1') {
      user = mockUser.admin.data;
    } else {
      user = mockUser.player.data;
    }
    return of(user);
  }
}
