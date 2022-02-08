import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import mockPlayers from '../mock-players';
import { Player } from '../Player';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor() {}

  getPlayersInTeam(teamId: string): Observable<Player[]> {
    return of(mockPlayers.data.filter((_player) => _player.team.id === teamId));
  }

  getAllPlayers(): Observable<Player[]> {
    return of(mockPlayers.data);
  }
}
