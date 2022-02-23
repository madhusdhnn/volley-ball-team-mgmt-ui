import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Profile from '../models/Profile';
import { environment } from 'src/environments/environment';
import ApiResponse from '../models/ApiResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  fetchProfile(): Observable<Profile> {
    return this.http
      .get<ApiResponse<Profile>>(`${environment.apiBaseUrl}/profile`)
      .pipe(map((res) => res.data));
  }
}
