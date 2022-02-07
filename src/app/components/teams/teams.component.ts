import { Component, Input, OnInit } from '@angular/core';
import Team from 'src/app/Team';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  @Input() isAdmin: boolean = false;
  @Input() currentTeam: Team;
  @Input() totalPlayers: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
