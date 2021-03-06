import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { TeamsService } from 'src/app/services/teams.service';
import { NewTeam } from '../../models/Team';

@Component({
  selector: 'team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.css'],
})
export class TeamModalComponent implements OnInit {
  @Input() toggleModal: boolean = false;
  @Output() toggleModalChange = new EventEmitter<boolean>();

  faTimes = faTimes;
  faQuestionCircle = faQuestionCircle;

  teamName: string;
  teamNameInvalid: boolean = false;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {}

  changeTeamName(val: any) {
    if (this.teamNameInvalid) {
      this.teamNameInvalid = false;
    }
    this.teamName = val;
  }

  closeModal() {
    this.toggleModal = false;
    this.resetForm();
    this.toggleModalChange.emit(this.toggleModal);
  }

  onSubmit() {
    let isError = false;
    if (!this.teamName) {
      this.teamNameInvalid = true;
      isError = true;
    }

    if (!isError) {
      const newTeam: NewTeam = {
        teamName: this.teamName,
      };
      this.teamsService.createTeam(newTeam).subscribe(() => {
        setTimeout(() => this.closeModal(), 400);
      });
    }
  }

  private resetForm(): void {
    this.teamName = '';
    this.teamNameInvalid = false;
  }
}
