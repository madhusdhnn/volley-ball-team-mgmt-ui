import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, mapTo, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import ApiResponse from '../models/ApiResponse';
import Authentication from '../models/Authentication';
import CurrentUser from '../models/CurrentUser';
import { CurrentUserLike } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly ACCESS_TOKEN = 'access_token';
  private readonly CURRENT_USER = 'current_user';

  private currentUserSubject: BehaviorSubject<CurrentUserLike>;

  constructor(private http: HttpClient) {
    const currentUser: CurrentUser = this.getCurrentUser();
    this.currentUserSubject = new BehaviorSubject<CurrentUserLike>(currentUser);
  }

  onCurrentUser(): Observable<CurrentUserLike> {
    return this.currentUserSubject.asObservable();
  }

  login(username: string, password: string): Observable<boolean> {
    const body = { username, password };
    return this.http.post<any>(`${environment.authBaseUrl}/signin`, body).pipe(
      tap((response) => this.handleLoginResponse(response)),
      mapTo(true)
    );
  }

  logout(): Observable<boolean> {
    return this.http.post<any>(`${environment.authBaseUrl}/signout`, {}).pipe(
      tap(() => this.clearAuth()),
      mapTo(true)
    );
  }

  clientLogout(): Observable<never> {
    this.clearAuth();
    return of();
  }

  clearAuth() {
    this.clearLocalStorage();
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  handleLoginResponse(loginResponse: ApiResponse<Authentication>) {
    this.setAccessToken(loginResponse.data.accessToken);

    const user = loginResponse.data.user;
    this.setCurrentUser(user);
    this.currentUserSubject.next(user);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem(this.ACCESS_TOKEN, accessToken);
  }

  setCurrentUser(user: CurrentUser) {
    localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
  }

  getCurrentUser(): CurrentUser {
    return JSON.parse(localStorage.getItem(this.CURRENT_USER) || 'null');
  }

  clearLocalStorage() {
    localStorage.removeItem(this.CURRENT_USER);
    localStorage.removeItem(this.ACCESS_TOKEN);
  }
}
