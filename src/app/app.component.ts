import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'volley-team-management-ui';

  constructor(private commonService: CommonService) {
    this.commonService.fetchSupportedResponseCodes().subscribe();
  }
}
