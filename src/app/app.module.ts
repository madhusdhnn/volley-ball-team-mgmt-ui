import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsDropdownComponent } from './components/teams-dropdown/teams-dropdown.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamsComponent } from './components/teams/teams.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { TeamModalComponent } from './components/team-modal/team-modal.component';
import { TeamTitleComponent } from './components/team-title/team-title.component';
import { PlayerModalComponent } from './components/player-modal/player-modal.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';

import { AuthGuard } from './guards/auth.guard';
import { AnonymousGuard } from './guards/anonymous.guard';

import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuard],
    data: { checkAuth: true },
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AnonymousGuard],
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'players/all', component: AllPlayersComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

const interceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    PlayersComponent,
    TeamsDropdownComponent,
    TeamInfoComponent,
    TeamsComponent,
    DashboardComponent,
    ProfileComponent,
    AllPlayersComponent,
    TeamModalComponent,
    TeamTitleComponent,
    PlayerModalComponent,
    LoginComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [interceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
