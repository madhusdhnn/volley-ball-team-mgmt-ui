import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css'],
})
export class AppBarComponent implements OnInit, OnDestroy {
  isAdmin: boolean = false;
  showNav: boolean = false;

  currentUserSubscription: Subscription;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.currentUserSubscription = this.authService
      .onCurrentUser()
      .subscribe((_currentUser) => {
        this.showNav = !!_currentUser;
        this.isAdmin = _currentUser?.roleName === 'ADMIN';
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  onSignOut() {
    this.authService.logout().subscribe((result) => {
      if (result) {
        this.showNav = false;
        this.isAdmin = false;
        this.router.navigate(['/login']);
      }
    });
  }
}
