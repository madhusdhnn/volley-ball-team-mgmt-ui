import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Team } from 'src/app/models/Team';
import { Player } from '../../models/Player';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  faPlus = faPlus;

  @Input() isAdmin: boolean = false;
  @Input() currentTeam: Team;

  private _players: Player[] = [];
  currentTeamCount: number;
  toggleModal: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.currentTeamCount = this._players.length;
  }

  @Input()
  set players(val: Player[]) {
    this._players = val;
    this.currentTeamCount = this._players.length;
  }

  get players() {
    return this._players;
  }

  addPlayerToTeam() {
    console.log('creating player');
  }

  toggleAddPlayerModal() {
    this.toggleModal = true;
  }
}
