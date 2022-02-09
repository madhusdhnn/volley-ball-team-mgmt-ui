import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private teamChangeSubject: Subject<string> = new Subject<string>();

  constructor() {}

  selectTeam(teamId: string): void {
    this.teamChangeSubject.next(teamId);
  }

  onSelectTeam(): Observable<string> {
    return this.teamChangeSubject.asObservable();
  }
}
