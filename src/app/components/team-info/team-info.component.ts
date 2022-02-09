import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/Team';

@Component({
  selector: 'team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css'],
})
export class TeamInfoComponent implements OnInit {
  @Input() team: Team;
  @Input() isAdmin: boolean = false;
  @Input() totalPlayers: number = 0;

  faPlus = faPlus;
  toggleModal: boolean = false;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {}

  toggleCreateTeamModal() {
    this.toggleModal = true;
  }
}
