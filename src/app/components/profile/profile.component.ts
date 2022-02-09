import { Component, OnInit } from '@angular/core';
import Profile from '../../models/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile: Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {}
}
