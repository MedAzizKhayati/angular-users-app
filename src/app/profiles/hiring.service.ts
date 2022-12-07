import { Injectable } from '@angular/core';
import { Profile } from './models/profile.model';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class HiringService {
  hiredProfiles: Profile[] = [];

  constructor(
    private profileService: ProfileService,
  ) {
    this.profileService.invokeProfileChange.subscribe(() => {
      this.hiredProfiles = this.hiredProfiles.filter(profile => this.profileService.getProfile(profile.id));
    })
  }

  hireOrUnhireProfile(profile: Profile) {
    const index = this.hiredProfiles.indexOf(profile);
    if (index > -1) {
      this.hiredProfiles.splice(index, 1);
    } else {
      this.hiredProfiles.push(profile);
    }
  }

  getHiredProfiles(): Profile[] {
    return this.hiredProfiles;
  }

  isProfileHired(profile: Profile | null): boolean {
    if (!profile) {
      return false;
    }
    return this.hiredProfiles.includes(profile);
  }
}
