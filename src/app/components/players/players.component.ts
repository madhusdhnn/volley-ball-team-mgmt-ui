import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Player } from '../../models/Player';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  faPlus = faPlus;

  @Input() isAdmin: boolean = false;
  @Input() players: Player[] = [];

  constructor() {}

  ngOnInit(): void {}

  addPlayerToTeam() {
    console.log('creating player');
  }
}
