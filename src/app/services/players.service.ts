import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import mockPlayers from '../mock-players';
import mockPlayersAvailable from '../mock-players-free';
import ApiResponse from '../models/ApiResponse';
import AssignPlayerToTeam from '../models/AssignPlayerToTeam';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  players: Player[] = [];
  free: Player[] = [];

  constructor(private http: HttpClient) {
    this.players = mockPlayers.data;
    this.free = mockPlayersAvailable.data;
  }

  getPlayersInTeam(teamId: string): Observable<Player[]> {
    return this.http
      .get<ApiResponse<Player[]>>(
        `${environment.apiBaseUrl}/teams/${teamId}/players`
      )
      .pipe(map((res) => res.data));
  }

  getAllPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  getAllPlayersAvailable(): Observable<Player[]> {
    return of(this.free);
  }

  assignToTeam(
    requestBody: AssignPlayerToTeam
  ): Observable<{ status: string }> {
    const playersWillBeAssigned: Player[] = [];

    for (let i = 0; i < this.free.length; i++) {
      const p = this.free[i];

      if (requestBody.playerIds.includes(p.playerId)) {
        p.team.id = requestBody.teamId;
        playersWillBeAssigned.push(p);
      }
    }

    this.free = this.free.filter(
      (_pl) => !requestBody.playerIds.includes(_pl.playerId)
    );

    this.players.push(...playersWillBeAssigned);

    return of({ status: 'success' });
  }
}
