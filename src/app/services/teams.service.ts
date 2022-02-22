import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import mockTeams from '../mock-teams';
import ApiResponse from '../models/ApiResponse';
import { NewTeam, Team } from '../models/Team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  teams: Team[] = [];
  constructor(private http: HttpClient) {
    this.teams = mockTeams.data;
  }

  getAllTeams(): Observable<Team[]> {
    return this.http
      .get<ApiResponse<Team[]>>(`${environment.apiBaseUrl}/teams`)
      .pipe(map((resp) => resp.data));
  }

  getTeam(teamId: string): Observable<Team> {
    return this.http
      .get<ApiResponse<Team>>(`${environment.apiBaseUrl}/teams/${teamId}`)
      .pipe(map((resp) => resp.data));
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

    const teams = this.teams;
    teams.push(team);
    this.teams = teams;
    return of({ status: 'success' });
  }

  updateTeam(teamName: string, teamId: string): Observable<Team> {
    const teams = this.teams;
    teams.forEach((_team) => {
      if (_team.teamId === teamId) {
        _team.name = teamName;
      }
      return _team;
    });
    this.teams = teams;
    return this.getTeam(teamId);
  }
}
