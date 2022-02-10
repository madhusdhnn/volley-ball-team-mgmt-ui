import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from '../../models/Team';
import { faPen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'team-title',
  templateUrl: './team-title.component.html',
  styleUrls: ['./team-title.component.css'],
})
export class TeamTitleComponent implements OnInit {
  @Input() currentTeam: Team;
  @Input() isAdmin: boolean = false;

  faSave = faSave;
  faPen = faPen;
  faTrash = faTrash;

  teamTitle: string;
  editMode: boolean = false;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamTitle = this.currentTeam?.name;
  }

  enableEditMode() {
    this.teamTitle = this.currentTeam?.name;
    this.editMode = true;
  }

  deleteTeam(team: Team) {
    console.log(team);
  }

  changeTeamTitle(e: any) {
    this.teamTitle = e.target.value;
  }

  onSubmit() {
    this.teamsService
      .updateTeam(this.teamTitle, this.currentTeam?.teamId)
      .subscribe((_team) => {
        this.teamTitle = _team.name;
        this.editMode = false;
      });
  }
}
