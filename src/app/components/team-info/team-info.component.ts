import { Component, Input, OnInit } from '@angular/core';
import {
  faTrash,
  faPen,
  faPlus,
  faTimes,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { TeamsService } from 'src/app/services/teams.service';
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
  faTimes = faTimes;
  faQuestionCircle = faQuestionCircle;
  toggleModal: boolean = false;
  editMode: boolean = false;

  teamName: string;
  teamNameInvalid: boolean = false;

  displayName: string;
  displayNameInvalid: boolean = false;

  @Input() isAdmin: boolean = false;
  @Input() team: Team;
  @Input() totalPlayers: number = 0;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {}

  editTeamDetails(team: Team) {
    // enable a modal and show the current team details for editing
    console.log(team);
    this.editMode = true;
    this.toggleModal = true;
  }

  deleteTeam(team: Team) {
    console.log(team);
  }

  toggleCreateTeamModal() {
    this.resetForm();
    this.toggleModal = true;
  }

  closeModal() {
    this.toggleModal = false;
    this.resetForm();
  }

  changeDisplayName(val: any) {
    if (val && this.displayNameInvalid) {
      this.displayNameInvalid = false;
    }
  }

  changeTeamName(val: any) {
    if (val && this.teamNameInvalid) {
      this.teamNameInvalid = false;
    }
  }

  onSubmit() {
    if (!this.teamName) {
      this.teamNameInvalid = true;
    }

    if (!this.displayName) {
      this.displayNameInvalid = true;
    } else {
      const newTeam: Team = {
        name: this.teamName,
        displayName: this.displayName,
      };
      this.teamsService.createTeam(newTeam).subscribe(() => {
        setTimeout(() => this.closeModal(), 400);
      });
    }
  }

  private resetForm(): void {
    this.teamName = '';
    this.displayName = '';
  }
}
