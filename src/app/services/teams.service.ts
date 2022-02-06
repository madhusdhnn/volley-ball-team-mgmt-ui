import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import mockTeams from '../mock-teams';
import Team from '../Team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor() {}

  getAllTeams(): Observable<Team[]> {
    return of(mockTeams.data);
  }

  // returns currently logged in player's team
  getTeam(teamId: string): Observable<Team | undefined> {
    return of(mockTeams.data.find((_team) => _team.teamId === teamId));
  }
}
