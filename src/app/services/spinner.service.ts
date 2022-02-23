import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  constructor(private ngxSpinner: NgxSpinnerService) {}

  show() {
    this.ngxSpinner.show();
  }

  hide() {
    this.ngxSpinner.hide();
  }
}
