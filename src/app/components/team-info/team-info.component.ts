import { Component, Input, OnInit } from '@angular/core';
import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import Team from '../../Team';

@Component({
  selector: 'team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css'],
})
export class TeamInfoComponent implements OnInit {
  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;

  @Input() isAdmin: boolean = false;
  @Input() team: Team;
  @Input() totalPlayers: number = 0;

  constructor() {}

  ngOnInit(): void {}

  editTeamDetails(team: Team) {
    // enable a modal and show the current team details for editing
    console.log(team);
  }

  deleteTeam(team: Team) {
    console.log(team);
  }

  createTeam() {
    console.log('creating team');
  }
}
