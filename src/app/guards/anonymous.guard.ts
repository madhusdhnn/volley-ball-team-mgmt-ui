import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

type GuardActivationResult =
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree;

@Injectable({
  providedIn: 'root',
})
export class AnonymousGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): GuardActivationResult {
    const activateWithAuthCheck: boolean = route.data['checkAuth'] || false;

    if (activateWithAuthCheck && this.authService.isLoggedIn()) {
      return this.router.parseUrl('/dashboard');
    }
    return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): GuardActivationResult {
    return this.canActivate(childRoute, state);
  }
}
