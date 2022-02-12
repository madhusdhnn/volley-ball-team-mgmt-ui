import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import AssignPlayerToTeam from 'src/app/models/AssignPlayerToTeam';
import { Player } from 'src/app/models/Player';
import { Team } from 'src/app/models/Team';
import { PlayersService } from 'src/app/services/players.service';

type PlayersSelected = {
  [playerIdAndName: string]: boolean;
};

@Component({
  selector: 'player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.css'],
})
export class PlayerModalComponent implements OnInit {
  @Input() currentTeamCount: number = 0;
  @Input() currentTeam: Team;

  private _modalVisible = false;
  @Output() modalVisibleChange = new EventEmitter<boolean>();

  faTimes = faTimes;

  freePlayers: Player[] = [];
  maxPlayersReached: boolean = false;
  playersSelected: PlayersSelected = {};

  chips: string[] = [];

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService
      .getAllPlayersAvailable()
      .subscribe((_players) => (this.freePlayers = _players));
  }

  @Input()
  set modalVisible(val: boolean) {
    this._modalVisible = val;
    if (val) {
      this.playersService
        .getAllPlayersAvailable()
        .subscribe((_players) => (this.freePlayers = _players));
    }
  }

  get modalVisible(): boolean {
    return this._modalVisible;
  }

  onPlayerSelect(val: any, player: Player) {
    if (val) {
      if (this.maxPlayersReached) {
        return;
      }

      this.playersSelected = {
        ...this.playersSelected,
        [player.playerId]: val,
      };
      this.chips.push(player.playerId + '-' + player.name);
    } else {
      const index = this.chips.findIndex(
        (_pl) => _pl === player.playerId + '-' + player.name
      );

      if (index !== -1) {
        this.chips.splice(index, 1);
      }
      this.playersSelected = {
        ...this.playersSelected,
        [player.playerId]: val,
      };
    }
    this.ensureMaxPlayer();
  }

  ensureMaxPlayer() {
    const totalCount =
      Object.values(this.playersSelected).filter((bVal) => bVal).length +
      this.currentTeamCount;

    this.maxPlayersReached = totalCount >= 6;
  }

  closeModal() {
    this.resetModal();
  }

  resetModal() {
    this.playersSelected = {};
    this.chips = [];
    this.maxPlayersReached = false;
    this.modalVisible = false;
    this.modalVisibleChange.emit(this.modalVisible);
  }

  onSubmit() {
    const selectedPlayerIds: string[] = this.freePlayers
      .filter((_freePlayer) => this.isSelected(_freePlayer))
      .map((_pl) => _pl.playerId);

    const requestBody: AssignPlayerToTeam = {
      teamId: this.currentTeam.teamId,
      playerIds: selectedPlayerIds,
    };

    this.playersService
      .assignToTeam(requestBody)
      .subscribe(() => this.resetModal());
  }

  isSelected(player: Player): boolean {
    return this.chips.includes(player.playerId + '-' + player.name);
  }
}
