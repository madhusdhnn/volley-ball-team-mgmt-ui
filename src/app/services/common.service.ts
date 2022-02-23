import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import ApiResponse from '../models/ApiResponse';
import ResponseCodes from '../models/ResponseCodes';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  responseCodesSubject: BehaviorSubject<ResponseCodes> = new BehaviorSubject<
    ResponseCodes | any
  >(null);

  constructor(private http: HttpClient) {}

  onResponseCodes(): Observable<ResponseCodes> {
    return this.responseCodesSubject.asObservable();
  }

  getResponseCodes(): ResponseCodes {
    return this.responseCodesSubject.value;
  }

  fetchSupportedResponseCodes(): Observable<ResponseCodes> {
    return this.http
      .get<ApiResponse<ResponseCodes>>(
        `${environment.apiBaseUrl}/supported-response-codes`
      )
      .pipe(
        map((_resp) => _resp.data),
        tap((_resp) => this.responseCodesSubject.next(_resp))
      );
  }
}
