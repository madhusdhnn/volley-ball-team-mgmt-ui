import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  catchError,
  map,
  Observable,
  of,
  Subscription,
  tap,
  throwError,
} from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { CommonService } from '../services/common.service';
import ApiResponse from '../models/ApiResponse';
import ResponseCodes from '../models/ResponseCodes';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  responseCodes: ResponseCodes;
  responseCodesSubscription: Subscription;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private commonService: CommonService
  ) {
    this.responseCodesSubscription = this.commonService
      .onResponseCodes()
      .subscribe((_rc) => {
        this.responseCodes = _rc;
      });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (this.isClientError(err.status)) {
          const errorResponse = <ApiResponse<any>>err.error;
          if (
            this.responseCodes.clientErrors.unAuthorized.includes(
              errorResponse.code
            )
          ) {
            return this.handle401Errors(errorResponse);
          } else if (
            this.responseCodes.clientErrors.forbidden.includes(
              errorResponse.code
            )
          ) {
            return this.handle403Errors(errorResponse);
          } else if (
            this.responseCodes.clientErrors.notFound.includes(
              errorResponse.code
            )
          ) {
            return this.handle404Errors(errorResponse);
          } else if (
            this.responseCodes.clientErrors.badRequest.includes(
              errorResponse.code
            )
          ) {
            return this.handle400Errors(errorResponse);
          }
        }
        return throwError(() => 'Something went wrong');
      })
    );
  }

  handle400Errors(errorResponse: ApiResponse<any>): Observable<never> {
    return of();
  }

  handle401Errors(errorResponse: ApiResponse<any>): Observable<never> {
    const code = errorResponse.code;
    if (code === 'AUTH_401') {
      return throwError(() => errorResponse);
    } else if (['AUTH_ERR_401', 'AUTH_EXP_401', 'ACC_401'].includes(code)) {
      this.authService.clientLogout();
      this.router.navigate(['/login']);
      return of();
    }
    return throwError(() => errorResponse.message);
  }

  handle403Errors(errorResponse: ApiResponse<any>): Observable<never> {
    const code = errorResponse.code;
    if (code === 'AUTH_403') {
      return throwError(() => errorResponse);
    }
    return of();
  }

  handle404Errors(errorResponse: ApiResponse<any>): Observable<never> {
    return of();
  }
  isClientError(statusCode: number): boolean {
    return statusCode > 400 && statusCode < 500;
  }
}
