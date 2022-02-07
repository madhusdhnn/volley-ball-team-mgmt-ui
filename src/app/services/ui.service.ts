import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private subject: Subject<string> = new Subject<string>();

  constructor() {}

  selectTeam(teamId: string): void {
    this.subject.next(teamId);
  }

  onSelectTeam(): Observable<string> {
    return this.subject.asObservable();
  }
}
