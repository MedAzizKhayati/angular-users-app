import { Component, OnInit } from '@angular/core';
import { Profile } from './models/profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
})
export class ProfilesComponent implements OnInit {

  profiles: Profile[] = [];
  selected: Profile | null = null;

  selectProfile(profile: Profile) {
    this.selected = profile;
  }
  ngOnInit(): void {
  }

}
