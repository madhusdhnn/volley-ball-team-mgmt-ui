import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import mockTeams from '../mock-teams';
import Team from '../Team';

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
      name: 'friends-girls',
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

  createTeam(team: Team): Observable<{ status: string }> {
    this.teams.push(team);
    return of({ status: 'success' });
  }
}
