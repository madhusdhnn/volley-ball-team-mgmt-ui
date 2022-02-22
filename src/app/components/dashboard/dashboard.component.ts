import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap, map, mergeMap, filter } from 'rxjs';
import { Player } from '../../models/Player';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import { UiService } from 'src/app/services/ui.service';
import { Team } from '../../models/Team';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CurrentUserLike } from 'src/app/models/types';

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
  currentUser: CurrentUserLike;

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

    const result = this.authService.onCurrentUser().pipe(
      filter((_currentUser) => !!_currentUser),
      tap((_currentUser) => (this.currentUser = _currentUser)),
      tap(
        (_currentUser) => (this.isAdmin = _currentUser?.roleName === 'ADMIN')
      ),
      mergeMap(() => {
        if (this.isAdmin) {
          return this.teamsService.getAllTeams();
        }
        return this.authService
          .fetchProfile()
          .pipe(map((_profile) => [_profile.team]));
      }),
      tap((_teams) => (this.teams = _teams)),
      map((_teams) => _teams[0]),
      tap((_team) => (this.currentTeam = _team)),
      mergeMap((_team) => this.playerService.getPlayersInTeam(_team.teamId))
    );

    this.currentUserSubscription = result.subscribe((_players) => {
      this.players = _players;
    });
  }

  ngOnInit(): void {}

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
