import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsDropdownComponent } from './components/teams-dropdown/teams-dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamsComponent } from './components/teams/teams.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { FormsModule } from '@angular/forms';
import { TeamModalComponent } from './components/team-modal/team-modal.component';
import { TeamTitleComponent } from './components/team-title/team-title.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'players/all', component: AllPlayersComponent },
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
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
