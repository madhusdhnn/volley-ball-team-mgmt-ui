import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/Player';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import { UiService } from 'src/app/services/ui.service';
import Team from 'src/app/Team';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  teams: Team[] = [];
  players: Player[] = [];
  currentTeam: Team;
  subscription: Subscription;

  isAdmin: boolean = true;

  constructor(
    private teamsService: TeamsService,
    private playerService: PlayersService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onSelectTeam().subscribe((_teamId) => {
      this.setTeam(_teamId);
      this.setPlayers(_teamId);
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
}
