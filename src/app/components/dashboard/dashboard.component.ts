import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Player } from '../../models/Player';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import { UiService } from 'src/app/services/ui.service';
import { Team } from '../../models/Team';
import CurrentUser from 'src/app/models/CurrentUser';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  teams: Team[] = [];
  players: Player[] = [];
  currentTeam: Team;
  isAdmin: boolean = false;
  currentUser: CurrentUser | null;

  selectedTeamSubscription: Subscription;
  currentUserSubscription: Subscription;

  constructor(
    private teamsService: TeamsService,
    private playerService: PlayersService,
    private uiService: UiService,
    private authService: AuthenticationService
  ) {
    this.selectedTeamSubscription = this.uiService
      .onSelectTeam()
      .subscribe((_teamId) => {
        this.setTeam(_teamId);
        this.setPlayers(_teamId);
      });

    this.currentUserSubscription = this.authService
      .onCurrentUser()
      .subscribe((_currentUser) => {
        this.currentUser = _currentUser;
        this.isAdmin = this.currentUser?.roleName === 'ADMIN';
      });
  }

  ngOnInit(): void {
    if (this.isAdmin) {
      this.teamsService
        .getAllTeams()
        .subscribe((_teams) => (this.teams = _teams));
    }

    this.uiService.selectTeam('1');
  }

  onTeamChange(teamId: string) {
    this.uiService.selectTeam(teamId);
  }

  private setPlayers(teamId: string) {
    this.playerService
      .getPlayersInTeam(teamId)
      .subscribe((_players) => (this.players = _players));
  }

  private setTeam(teamId: string) {
    this.teamsService
      .getTeam(teamId)
      .subscribe((_team) => (this.currentTeam = _team));
  }

  ngOnDestroy(): void {
    this.selectedTeamSubscription.unsubscribe();
    this.currentUserSubscription.unsubscribe();
  }
}
