import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { TeamsService } from 'src/app/services/teams.service';
import Team from 'src/app/Team';

@Component({
  selector: 'player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.css'],
})
export class PlayerModalComponent implements OnInit {
  @Input() toggleModal: boolean = false;

  @Output() toggleModalChange = new EventEmitter<boolean>();

  faTimes = faTimes;
  faQuestionCircle = faQuestionCircle;

  teamName: string;
  teamNameInvalid: boolean = false;

  displayName: string;
  displayNameInvalid: boolean = false;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {}

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

  closeModal() {
    this.toggleModal = false;
    this.toggleModalChange.emit(this.toggleModal);
    this.resetForm();
  }

  onSubmit() {
    let isError = false;
    if (!this.teamName) {
      this.teamNameInvalid = true;
      isError = true;
    }
    if (!this.displayName) {
      this.displayNameInvalid = true;
      isError = true;
    }

    if (!isError) {
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
