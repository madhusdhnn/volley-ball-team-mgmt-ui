import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css'],
})
export class AppBarComponent implements OnInit {
  activeTab: string;
  userId: string = '1';
  isAdmin: boolean = true;

  constructor() {
    this.activeTab = 'Home';
  }

  ngOnInit(): void {}
}
