import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Subscription,
  tap,
  map,
  filter,
  Observable,
  toArray,
  switchMap,
} from 'rxjs';
import { Player } from '../../models/Player';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import { UiService } from 'src/app/services/ui.service';
import { Team } from '../../models/Team';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CurrentUserLike } from 'src/app/models/types';
import { ProfileService } from 'src/app/services/profile.service';

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
    private profileService: ProfileService,
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
      .pipe(
        filter((_currentUser) => !!_currentUser),
        switchMap((_currentUser) => {
          this.currentUser = _currentUser;
          this.isAdmin = this.currentUser?.roleName === 'ADMIN';
          return this.fetchTeams();
        }),
        switchMap((_teams) => {
          this.teams = _teams;
          this.currentTeam = this.teams[0];
          return this.playerService.getPlayersInTeam(this.currentTeam.teamId);
        })
      )
      .subscribe((_players) => (this.players = _players));
  }

  ngOnInit(): void {}

  fetchTeams(): Observable<Team[]> {
    let teams: Observable<Team[]>;
    if (this.isAdmin) {
      teams = this.teamsService.getAllTeams();
    } else {
      teams = this.profileService.fetchProfile().pipe(
        map((_profile) => _profile.team),
        toArray()
      );
    }
    return teams;
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
