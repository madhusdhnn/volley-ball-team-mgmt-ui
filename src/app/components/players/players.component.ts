import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/Player';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  @Input() players: Player[] = [];
  constructor() {}

  ngOnInit(): void {}
}
