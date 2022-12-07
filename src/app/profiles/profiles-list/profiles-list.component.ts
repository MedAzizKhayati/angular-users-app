import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Profile } from '../models/profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
})
export class ProfilesListComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  profiles: Profile[] = [];
  constructor(
    profileService: ProfileService,
    private router: Router,
  ) {
    this.profiles = profileService.getProfiles();
    const sub = profileService.invokeProfileChange.subscribe(() => {
      this.profiles = profileService.getProfiles();
    });
    this.subscriptions.push(sub);
  }

  selectProfile(profile: Profile | undefined) {
    this.router.navigate(['/users', profile?.id]);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
