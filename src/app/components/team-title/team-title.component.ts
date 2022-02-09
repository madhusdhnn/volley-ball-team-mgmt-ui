import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/Team';
import { faPen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'team-title',
  templateUrl: './team-title.component.html',
  styleUrls: ['./team-title.component.css'],
})
export class TeamTitleComponent implements OnInit {
  @Input() team: Team;
  @Input() isAdmin: boolean = false;

  faSave = faSave;
  faPen = faPen;
  faTrash = faTrash;
  teamName: string;
  editMode: boolean = false;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamName = this.team?.name;
  }

  enableEditMode() {
    this.editMode = true;
  }

  deleteTeam(team: Team) {
    console.log(team);
  }

  onSubmit() {
    this.teamsService
      .updateTeam(this.teamName, this.team?.teamId)
      .subscribe(() => {
        this.editMode = false;
      });
  }
}
