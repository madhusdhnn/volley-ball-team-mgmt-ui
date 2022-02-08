import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/Player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css'],
})
export class AllPlayersComponent implements OnInit {
  allPlayers: Player[] = [];

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService
      .getAllPlayers()
      .subscribe((_allPlayers) => (this.allPlayers = _allPlayers));
    console.log(this.allPlayers);
  }
}
