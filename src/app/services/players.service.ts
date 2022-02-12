import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import mockPlayers from '../mock-players';
import mockPlayersAvailable from '../mock-players-free';
import AssignPlayerToTeam from '../models/AssignPlayerToTeam';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  players: Player[] = [];
  free: Player[] = [];

  constructor() {
    this.players = mockPlayers.data;
    this.free = mockPlayersAvailable.data;
  }

  getPlayersInTeam(teamId: string): Observable<Player[]> {
    return of(this.players.filter((_player) => _player.team.id === teamId));
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
