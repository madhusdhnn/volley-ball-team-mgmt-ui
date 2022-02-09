import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import mockTeams from '../mock-teams';
import { NewTeam, Team } from '../Team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  teams: Team[] = [];
  constructor() {
    this.teams = mockTeams.data;
  }

  getAllTeams(): Observable<Team[]> {
    return of(this.teams);
  }

  // returns currently logged in player's team
  getTeam(teamId: string): Observable<Team> {
    const dummy = {
      teamId: '1',
      name: 'Friends Women',
      displayName: 'Friends Girls',
      maxPlayers: 6,
      audit: {
        createdAt: new Date('2022-01-08T13:23:00.582Z').toLocaleDateString(
          'en-US'
        ),
        updatedAt: new Date('2022-01-08T13:23:04.598Z').toLocaleDateString(
          'en-US'
        ),
      },
    };
    return of(this.teams.find((_team) => _team.teamId === teamId) || dummy);
  }

  createTeam(newTeam: NewTeam): Observable<{ status: string }> {
    const team: Team = {
      teamId: '3',
      name: newTeam.teamName,
      maxPlayers: 6,
      audit: {
        createdAt: new Date().toLocaleDateString('en-US'),
        updatedAt: new Date().toLocaleDateString('en-US'),
      },
    };
    this.teams.push(team);
    return of({ status: 'success' });
  }

  updateTeam(teamName: string, teamId: string): Observable<Team> {
    this.teams = this.teams.map((_team) => {
      if (_team.teamId === teamId) {
        _team.name = teamName;
      }
      return _team;
    });
    console.log(this.teams);

    return this.getTeam(teamId);
  }
}
