import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Team from 'src/app/Team';

@Component({
  selector: 'teams-dropdown',
  templateUrl: './teams-dropdown.component.html',
  styleUrls: ['./teams-dropdown.component.css'],
})
export class TeamsDropdownComponent implements OnInit {
  isAdmin = true;

  @Input() teams: Team[] = [];
  @Output() selectTeamEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onTeamChange(teamId: string) {
    this.selectTeamEvent.emit(teamId);
  }
}
